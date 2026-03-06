import { get, put } from "@vercel/blob";

const STORE_PATH = "rame-shared-store.json";
const DEFAULT_ACCESS_ORDER = ["private", "public"];

const hasBlobToken = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

const getBlobAccessModes = () => {
  const configuredAccess = process.env.BLOB_STORE_ACCESS?.trim().toLowerCase();
  if (configuredAccess === "private" || configuredAccess === "public") {
    return [
      configuredAccess,
      ...DEFAULT_ACCESS_ORDER.filter((access) => access !== configuredAccess),
    ];
  }

  return DEFAULT_ACCESS_ORDER;
};

const getErrorMessage = (error, fallback) =>
  error instanceof Error && error.message ? error.message : fallback;

const isAccessMismatchError = (error) => {
  const message = getErrorMessage(error, "").toLowerCase();
  return (
    message.includes("private store") ||
    message.includes("public store") ||
    message.includes("public access") ||
    message.includes("private access")
  );
};

const parseBlobJson = async (stream) => {
  const response = new Response(stream, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return response.json();
};

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
    let lastError = null;

    for (const access of getBlobAccessModes()) {
      try {
        const blobResult = await get(STORE_PATH, {
          access,
          token: process.env.BLOB_READ_WRITE_TOKEN,
          useCache: false,
        });

        if (!blobResult) {
          return {
            ok: true,
            storageEnabled: true,
            store: {},
          };
        }

        if (blobResult.statusCode !== 200 || !blobResult.stream) {
          return {
            ok: true,
            storageEnabled: true,
            store: {},
          };
        }

        const rawPayload = await parseBlobJson(blobResult.stream);
        return {
          ok: true,
          storageEnabled: true,
          store: safeStorePayload(rawPayload),
        };
      } catch (error) {
        lastError = error;
        if (isAccessMismatchError(error)) {
          continue;
        }
        break;
      }
    }

    throw lastError ?? new Error("No se pudo leer el store compartido.");
  } catch (error) {
    return {
      ok: false,
      storageEnabled: true,
      error: getErrorMessage(error, "Error leyendo store compartido."),
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
    let lastError = null;

    for (const access of getBlobAccessModes()) {
      try {
        await put(STORE_PATH, JSON.stringify(safeStorePayload(nextStore)), {
          access,
          addRandomSuffix: false,
          allowOverwrite: true,
          contentType: "application/json; charset=utf-8",
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });

        return { ok: true, storageEnabled: true };
      } catch (error) {
        lastError = error;
        if (isAccessMismatchError(error)) {
          continue;
        }
        break;
      }
    }

    throw lastError ?? new Error("No se pudo escribir el store compartido.");
  } catch (error) {
    return {
      ok: false,
      storageEnabled: true,
      error: getErrorMessage(error, "Error escribiendo store compartido."),
    };
  }
};
