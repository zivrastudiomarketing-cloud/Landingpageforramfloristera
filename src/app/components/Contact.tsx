import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";

const WA_LINK = `https://wa.me/573224238092?text=Hola%2C%20quiero%20hacer%20un%20pedido%20%F0%9F%8C%B8`;

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #fdf0e8 0%, #fae6d9 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px]" style={{ backgroundColor: "#c9a96e" }} />
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#c9a96e",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Encuéntranos
            </span>
            <div className="w-10 h-[1px]" style={{ backgroundColor: "#c9a96e" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 600,
              color: "#3a2e26",
              textAlign: "center",
            }}
          >
            Visítanos
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "#9e7b5a",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            Estamos aquí para hacer tu momento especial más hermoso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map placeholder */}
          <div
            className="rounded-3xl overflow-hidden shadow-lg"
            style={{ minHeight: "380px", position: "relative" }}
          >
            <iframe
              title="RAMÉ Floristería ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7060013671407!2d-72.64939882476038!3d7.379765792624088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e664085a1dc4a73%3A0x6d0c8e5e95e3af9!2sPamplona%2C%20Norte%20de%20Santander!5e0!3m2!1ses!2sco!4v1709500000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "380px",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay pin card */}
            <div
              className="absolute bottom-5 left-5 right-5 flex items-center gap-3 p-4 rounded-2xl shadow-xl"
              style={{ backgroundColor: "#fdf6f0" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#4a6741" }}
              >
                <MapPin size={18} color="#fdf6f0" />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#3a2e26",
                  }}
                >
                  RAMÉ Floristería
                </p>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    color: "#9e7b5a",
                  }}
                >
                  Cra. 5 #4-48, CENTRO, Pamplona, Norte de Santander
                </p>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Contact cards */}
            {[
              {
                icon: <MapPin size={22} color="#4a6741" />,
                title: "Dirección",
                content: "Cra. 5 #4-48, CENTRO",
                sub: "Pamplona, Norte de Santander",
              },
              {
                icon: <Phone size={22} color="#4a6741" />,
                title: "Teléfono / WhatsApp",
                content: "+57 322 4238092",
                sub: "Disponible lun–sáb, 8am–7pm",
              },
              {
                icon: <Clock size={22} color="#4a6741" />,
                title: "Horarios",
                content: "Lunes a Sábado: 8:00am – 7:00pm",
                sub: "Domingos y festivos: 9:00am – 2:00pm",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl shadow-sm"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #f0e8e0",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#f0ebe4" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#3a2e26",
                      marginBottom: "2px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "14px",
                      color: "#5a4a3a",
                    }}
                  >
                    {item.content}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "12px",
                      color: "#9e7b5a",
                      marginTop: "2px",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div
              className="p-6 rounded-3xl flex flex-col gap-4"
              style={{
                background: "linear-gradient(135deg, #4a6741, #3d5535)",
              }}
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={24} color="#fdf6f0" />
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#fdf6f0",
                    }}
                  >
                    Contacto rápido
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "13px",
                      color: "rgba(253,246,240,0.75)",
                    }}
                  >
                    Escríbenos ahora y te respondemos enseguida
                  </p>
                </div>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#fdf6f0",
                  color: "#4a6741",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                <MessageCircle size={17} />
                Abrir WhatsApp
              </a>

              {/* Social media row */}
              <div
                style={{
                  borderTop: "1px solid rgba(253,246,240,0.2)",
                  paddingTop: "12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "11px",
                    color: "rgba(253,246,240,0.6)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  Síguenos en redes
                </p>
                <div className="flex items-center justify-center gap-3">
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
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
                      style={{
                        backgroundColor: "rgba(253,246,240,0.15)",
                        color: "#fdf6f0",
                        textDecoration: "none",
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        border: "1px solid rgba(253,246,240,0.2)",
                      }}
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}