import {
  getAuthConfig,
  parseCookies,
  readJsonBody,
  sendJson,
  sendMethodNotAllowed,
  SESSION_COOKIE_NAME,
  verifySessionToken,
} from "./_auth.js";
import { readSharedStore, writeSharedStore } from "../_store.js";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return sendMethodNotAllowed(res, ["PUT"]);
  }

  const authConfig = getAuthConfig();
  if (!authConfig.isConfigured) {
    return sendJson(res, 500, {
      ok: false,
      error:
        "Autenticacion administrativa no configurada. Define ADMIN_USERNAME, ADMIN_PASSWORD y ADMIN_SESSION_SECRET.",
    });
  }

  const cookies = parseCookies(req.headers.cookie);
  const sessionToken = cookies[SESSION_COOKIE_NAME];
  const authenticated = verifySessionToken(sessionToken, authConfig.secret);
  if (!authenticated) {
    return sendJson(res, 401, { ok: false, error: "Sesion no valida." });
  }

  let payload;
  try {
    payload = await readJsonBody(req);
  } catch (error) {
    const message =
      error instanceof Error && error.message === "request_too_large"
        ? "La solicitud es demasiado grande."
        : "Formato JSON invalido.";
    return sendJson(res, 400, { ok: false, error: message });
  }

  const patch = {};
  if ("heroContent" in payload) {
    if (!payload.heroContent || typeof payload.heroContent !== "object") {
      return sendJson(res, 400, { ok: false, error: "heroContent invalido." });
    }
    patch.heroContent = payload.heroContent;
  }

  if ("products" in payload) {
    if (!Array.isArray(payload.products)) {
      return sendJson(res, 400, { ok: false, error: "products invalido." });
    }
    patch.products = payload.products;
  }

  if (Object.keys(patch).length === 0) {
    return sendJson(res, 400, {
      ok: false,
      error: "No se enviaron campos validos para guardar.",
    });
  }

  const currentStore = await readSharedStore();
  const baseStore = currentStore.ok ? currentStore.store : {};
  const nextStore = { ...baseStore, ...patch };

  const writeResult = await writeSharedStore(nextStore);
  if (!writeResult.ok) {
    return sendJson(res, 500, {
      ok: false,
      error:
        writeResult.error ??
        "No se pudo guardar el contenido compartido. Verifica BLOB_READ_WRITE_TOKEN.",
    });
  }

  return sendJson(res, 200, { ok: true });
}
