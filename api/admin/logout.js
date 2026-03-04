import {
  isSecureRequest,
  sendJson,
  sendMethodNotAllowed,
  serializeCookie,
  SESSION_COOKIE_NAME,
} from "./_auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return sendMethodNotAllowed(res, ["POST"]);
  }

  const expiredCookie = serializeCookie(SESSION_COOKIE_NAME, "", {
    maxAge: 0,
    expires: new Date(0),
    secure: isSecureRequest(req),
  });

  return sendJson(
    res,
    200,
    { ok: true },
    {
      "Set-Cookie": expiredCookie,
    }
  );
}
