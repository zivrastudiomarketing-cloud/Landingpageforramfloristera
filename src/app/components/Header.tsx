import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoImg from "figma:asset/a24ef7028bf8b5179ddb28e37f76423b7bff51cc.png";

const WA_NUMBER = "573224238092";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20sus%20arreglos%20florales%20%F0%9F%8C%B8`;

interface HeaderProps {
  onNavClick: (section: string) => void;
}

export function Header({ onNavClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavClick("hero")}
        >
          <img
            src={logoImg}
            alt="RAMÉ Floristería y Decoraciones"
            style={{ height: "52px", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* CTA Button + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-md"
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

          <button
            className="md:hidden p-2"
            style={{ color: "#4a6741" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
            href={WA_LINK}
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