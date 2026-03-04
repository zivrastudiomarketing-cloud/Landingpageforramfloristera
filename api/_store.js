import { list, put } from "@vercel/blob";

const STORE_PATH = "rame-shared-store.json";

const hasBlobToken = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

const safeStorePayload = (value) => {
  if (!value || typeof value !== "object") return {};
  const parsed = value;

  const result = {};
  if ("heroContent" in parsed && parsed.heroContent && typeof parsed.heroContent === "object") {
    result.heroContent = parsed.heroContent;
  }
  if ("products" in parsed && Array.isArray(parsed.products)) {
    result.products = parsed.products;
  }
  return result;
};

export const readSharedStore = async () => {
  if (!hasBlobToken()) {
    return {
      ok: false,
      storageEnabled: false,
      error: "BLOB_READ_WRITE_TOKEN no configurado.",
      store: {},
    };
  }

  try {
    const { blobs } = await list({
      prefix: STORE_PATH,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      limit: 10,
    });

    const exactBlob = blobs.find((blob) => blob.pathname === STORE_PATH);
    const latestBlob = exactBlob ?? blobs[0];
    if (!latestBlob) {
      return {
        ok: true,
        storageEnabled: true,
        store: {},
      };
    }

    const response = await fetch(latestBlob.url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo leer el store compartido.");
    }

    const rawPayload = await response.json();
    return {
      ok: true,
      storageEnabled: true,
      store: safeStorePayload(rawPayload),
    };
  } catch (error) {
    return {
      ok: false,
      storageEnabled: true,
      error: error instanceof Error ? error.message : "Error leyendo store compartido.",
      store: {},
    };
  }
};

export const writeSharedStore = async (nextStore) => {
  if (!hasBlobToken()) {
    return {
      ok: false,
      storageEnabled: false,
      error: "BLOB_READ_WRITE_TOKEN no configurado.",
    };
  }

  try {
    await put(STORE_PATH, JSON.stringify(safeStorePayload(nextStore)), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json; charset=utf-8",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    return { ok: true, storageEnabled: true };
  } catch (error) {
    return {
      ok: false,
      storageEnabled: true,
      error: error instanceof Error ? error.message : "Error escribiendo store compartido.",
    };
  }
};
