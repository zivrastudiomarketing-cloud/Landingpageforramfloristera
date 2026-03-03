import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoImg from "../../assets/a24ef7028bf8b5179ddb28e37f76423b7bff51cc.png";
import { createGeneralWhatsAppLink } from "./data/whatsapp";

interface HeaderProps {
  onNavClick: (section: string) => void;
}

export function Header({ onNavClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const waLink = createGeneralWhatsAppLink();

  const navLinks = [
    { label: "Inicio", section: "hero" },
    { label: "Arreglos", section: "gallery" },
    { label: "Contacto", section: "contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "#fdf6f0", borderBottom: "1px solid #e8d5c4" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavClick("hero")}
        >
          <img
            src={logoImg}
            alt="RAME Floristeria y Decoraciones"
            style={{ height: "76px", width: "auto", objectFit: "contain" }}
          />
        </div>

        <div className="hidden md:flex items-center ml-auto gap-8">
          <nav className="flex items-center gap-7 mr-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => onNavClick(link.section)}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#5a4a3a",
                  letterSpacing: "0.06em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  position: "relative",
                }}
                className="hover:text-[#4a6741] transition-colors duration-200 group"
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: "1px",
                    backgroundColor: "#c9a96e",
                    transition: "width 0.3s ease",
                  }}
                  className="group-hover:w-full"
                />
              </button>
            ))}
          </nav>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{
              backgroundColor: "#4a6741",
              color: "#fdf6f0",
              fontFamily: "'Lato', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            <MessageCircle size={15} />
            Pedir por WhatsApp
          </a>
        </div>

        <button
          className="md:hidden p-2 ml-auto"
          style={{ color: "#4a6741" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: "#fdf6f0", borderTop: "1px solid #e8d5c4" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                onNavClick(link.section);
                setMenuOpen(false);
              }}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "15px",
                color: "#5a4a3a",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "6px 0",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full"
            style={{
              backgroundColor: "#4a6741",
              color: "#fdf6f0",
              fontFamily: "'Lato', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <MessageCircle size={16} />
            Pedir por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
