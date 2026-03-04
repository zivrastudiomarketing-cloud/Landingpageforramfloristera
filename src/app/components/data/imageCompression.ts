export interface CompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  targetBytes?: number;
  minQuality?: number;
  initialQuality?: number;
}

export interface CompressedImageResult {
  dataUrl: string;
  bytes: number;
  width: number;
  height: number;
  mimeType: string;
}

const DEFAULT_OPTIONS: Required<CompressionOptions> = {
  maxWidth: 1600,
  maxHeight: 1600,
  targetBytes: 260 * 1024,
  minQuality: 0.45,
  initialQuality: 0.82,
};

const readFileAsDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
    reader.readAsDataURL(file);
  });

const loadImageFromDataUrl = (dataUrl: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("No se pudo procesar la imagen."));
    image.src = dataUrl;
  });

const fitInside = (
  width: number,
  height: number,
  maxWidth: number,
  maxHeight: number
) => {
  const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
  return {
    width: Math.max(1, Math.round(width * ratio)),
    height: Math.max(1, Math.round(height * ratio)),
  };
};

const canvasToBlob = (
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality: number
): Promise<Blob> =>
  new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("No se pudo comprimir la imagen."));
          return;
        }
        resolve(blob);
      },
      mimeType,
      quality
    );
  });

const blobToDataUrl = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("No se pudo convertir la imagen."));
    reader.readAsDataURL(blob);
  });

const getMimeTypeCandidates = (fileType: string) => {
  const list = ["image/webp"];
  if (fileType === "image/png") {
    list.push("image/png");
  } else {
    list.push("image/jpeg");
  }
  return Array.from(new Set(list));
};

export const compressImageFile = async (
  file: File,
  options: CompressionOptions = {}
): Promise<CompressedImageResult> => {
  if (!file.type.startsWith("image/")) {
    throw new Error("El archivo no es una imagen.");
  }

  const settings = { ...DEFAULT_OPTIONS, ...options };
  const originalDataUrl = await readFileAsDataUrl(file);
  const image = await loadImageFromDataUrl(originalDataUrl);
  const targetSize = fitInside(
    image.naturalWidth,
    image.naturalHeight,
    settings.maxWidth,
    settings.maxHeight
  );

  if (
    file.size <= settings.targetBytes &&
    targetSize.width === image.naturalWidth &&
    targetSize.height === image.naturalHeight
  ) {
    return {
      dataUrl: originalDataUrl,
      bytes: file.size,
      width: image.naturalWidth,
      height: image.naturalHeight,
      mimeType: file.type,
    };
  }

  const canvas = document.createElement("canvas");
  canvas.width = targetSize.width;
  canvas.height = targetSize.height;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("No se pudo inicializar el compresor de imagen.");
  }
  context.drawImage(image, 0, 0, targetSize.width, targetSize.height);

  const mimeTypeCandidates = getMimeTypeCandidates(file.type);
  let bestBlob: Blob | null = null;
  let bestType = file.type;

  for (const mimeType of mimeTypeCandidates) {
    let quality = settings.initialQuality;
    const qualityStep = 0.07;

    while (quality >= settings.minQuality) {
      const blob = await canvasToBlob(canvas, mimeType, quality);
      if (!bestBlob || blob.size < bestBlob.size) {
        bestBlob = blob;
        bestType = mimeType;
      }

      if (blob.size <= settings.targetBytes) {
        const dataUrl = await blobToDataUrl(blob);
        return {
          dataUrl,
          bytes: blob.size,
          width: targetSize.width,
          height: targetSize.height,
          mimeType,
        };
      }

      if (mimeType === "image/png") {
        break;
      }

      quality -= qualityStep;
    }
  }

  if (!bestBlob) {
    throw new Error("No se pudo comprimir la imagen.");
  }

  return {
    dataUrl: await blobToDataUrl(bestBlob),
    bytes: bestBlob.size,
    width: targetSize.width,
    height: targetSize.height,
    mimeType: bestType,
  };
};

