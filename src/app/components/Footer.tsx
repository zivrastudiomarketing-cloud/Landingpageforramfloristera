import { MessageCircle } from "lucide-react";
import logoImg from "figma:asset/fa7203f638ae67d5137e7b4d8dbf6e6b51e0a54c.png";

function TikTokIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="w-full py-12 px-6"
      style={{ backgroundColor: "#2e2419" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8" style={{ borderBottom: "1px solid rgba(201,169,110,0.25)" }}>
          {/* Logo */}
          <div className="flex flex-col">
            <img
              src={logoImg}
              alt="RAMÉ Floristería y Decoraciones"
              style={{ height: "64px", width: "auto", objectFit: "contain" }}
            />
            <p
              className="mt-3"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(253,246,240,0.55)",
                maxWidth: "240px",
                lineHeight: 1.6,
              }}
            >
              Creamos momentos únicos con flores frescas y pasión en cada arreglo.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            <div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#c9a96e",
                  marginBottom: "12px",
                  letterSpacing: "0.05em",
                }}
              >
                Servicios
              </p>
              {["Arreglos florales", "Decoración de eventos", "Flores por suscripción", "Regalos corporativos"].map((link) => (
                <p
                  key={link}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "13px",
                    color: "rgba(253,246,240,0.6)",
                    marginBottom: "6px",
                    cursor: "pointer",
                  }}
                  className="hover:text-[#fdf6f0] transition-colors"
                >
                  {link}
                </p>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#c9a96e",
                  marginBottom: "12px",
                  letterSpacing: "0.05em",
                }}
              >
                Ocasiones
              </p>
              {["Cumpleaños", "Bodas y eventos", "Condolencias", "Días especiales"].map((link) => (
                <p
                  key={link}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "13px",
                    color: "rgba(253,246,240,0.6)",
                    marginBottom: "6px",
                    cursor: "pointer",
                  }}
                  className="hover:text-[#fdf6f0] transition-colors"
                >
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Social + WA */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#c9a96e",
                letterSpacing: "0.05em",
              }}
            >
              Síguenos
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <InstagramIcon />,
                  label: "Instagram",
                  href: "https://www.instagram.com/rame_decoraciones?igsh=ZjZubGFneHR3YWRs",
                },
                {
                  icon: <TikTokIcon />,
                  label: "TikTok",
                  href: "https://www.tiktok.com/@rame.decoracion1?_r=1&_t=ZS-94NmoHAmw2m",
                },
                {
                  icon: <FacebookIcon />,
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1HMbxmx4fk/",
                },
                {
                  icon: <MessageCircle size={17} />,
                  label: "WhatsApp",
                  href: "https://wa.me/573224238092",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 hover:bg-[#c9a96e]"
                  style={{
                    backgroundColor: "rgba(201,169,110,0.2)",
                    color: "#c9a96e",
                    textDecoration: "none",
                    border: "1px solid rgba(201,169,110,0.3)",
                  }}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {/* Gold divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "linear-gradient(to right, #c9a96e, transparent)",
                opacity: 0.4,
              }}
            />
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", color: "rgba(253,246,240,0.5)" }}>
                Pamplona, Norte de Santander
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", color: "rgba(253,246,240,0.5)" }}>
                +57 322 4238092
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-3">
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px", color: "rgba(253,246,240,0.35)" }}>
            © 2026 RAMÉ Floristería & Decoraciones. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-4 h-[1px]" style={{ backgroundColor: "#c9a96e", opacity: 0.4 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", color: "rgba(201,169,110,0.5)", fontStyle: "italic" }}>
              Con amor, desde Pamplona
            </span>
            <div className="w-4 h-[1px]" style={{ backgroundColor: "#c9a96e", opacity: 0.4 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}