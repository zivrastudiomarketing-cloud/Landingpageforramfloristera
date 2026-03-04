import {
  createSessionToken,
  getAuthConfig,
  isSecureRequest,
  readJsonBody,
  sendJson,
  sendMethodNotAllowed,
  serializeCookie,
  SESSION_COOKIE_NAME,
} from "./_auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return sendMethodNotAllowed(res, ["POST"]);
  }

  const authConfig = getAuthConfig();
  if (!authConfig.isConfigured) {
    return sendJson(res, 500, {
      ok: false,
      error:
        "Autenticacion administrativa no configurada. Define ADMIN_USERNAME, ADMIN_PASSWORD y ADMIN_SESSION_SECRET.",
    });
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

  const username = typeof payload.username === "string" ? payload.username.trim() : "";
  const password = typeof payload.password === "string" ? payload.password : "";

  if (username !== authConfig.username || password !== authConfig.password) {
    return sendJson(res, 401, {
      ok: false,
      error: "Credenciales invalidas. Verifica usuario y contrasena.",
    });
  }

  const sessionToken = createSessionToken(
    authConfig.username,
    authConfig.secret,
    authConfig.sessionMaxAgeSeconds
  );
  const sessionCookie = serializeCookie(SESSION_COOKIE_NAME, sessionToken, {
    maxAge: authConfig.sessionMaxAgeSeconds,
    secure: isSecureRequest(req),
  });

  return sendJson(
    res,
    200,
    { ok: true },
    {
      "Set-Cookie": sessionCookie,
    }
  );
}
