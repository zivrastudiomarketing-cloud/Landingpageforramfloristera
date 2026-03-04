import { sendJson, sendMethodNotAllowed } from "./admin/_auth.js";
import { readSharedStore } from "./_store.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return sendMethodNotAllowed(res, ["GET"]);
  }

  const result = await readSharedStore();
  if (!result.ok) {
    return sendJson(res, 200, {
      ok: true,
      storageEnabled: false,
      heroContent: null,
      products: null,
      warning: result.error ?? "Store compartido no disponible.",
    });
  }

  return sendJson(res, 200, {
    ok: true,
    storageEnabled: true,
    heroContent: result.store.heroContent ?? null,
    products: result.store.products ?? null,
  });
}
