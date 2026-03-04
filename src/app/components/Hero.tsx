import type { CSSProperties } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import type {
  HeroButtonVariant,
  HeroContent,
  HeroExtraButton,
} from "./data/heroStore";
import { createGeneralWhatsAppLink } from "./data/whatsapp";

interface HeroProps {
  onScrollToGallery: () => void;
  content: HeroContent;
}

const getExtraButtonStyle = (variant: HeroButtonVariant): CSSProperties => {
  if (variant === "filled") {
    return {
      backgroundColor: "#4a6741",
      color: "#fdf6f0",
      border: "none",
    };
  }

  if (variant === "light") {
    return {
      backgroundColor: "rgba(253, 246, 240, 0.92)",
      color: "#3a2e26",
      border: "1px solid rgba(232, 213, 196, 0.9)",
    };
  }

  return {
    backgroundColor: "transparent",
    color: "#fdf6f0",
    border: "2px solid rgba(253, 246, 240, 0.9)",
  };
};

const getButtonTarget = (button: HeroExtraButton) => {
  if (!button.openInNewTab) {
    return { target: undefined, rel: undefined };
  }

  return { target: "_blank", rel: "noopener noreferrer" };
};

export function Hero({ onScrollToGallery, content }: HeroProps) {
  const waLink = createGeneralWhatsAppLink(
    "Hola, quiero hacer un pedido desde el banner principal."
  );

  const extraButtons = content.extraButtons.filter(
    (button) => button.enabled && button.label.trim() && button.url.trim()
  );

  const hasActions =
    content.showGalleryButton || content.showWhatsAppButton || extraButtons.length > 0;

  return (
    <section className="relative min-h-[calc(100vh-75px)] flex items-center overflow-hidden">
      <img
        src={content.bannerImage}
        alt="Banner principal RAME"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(106deg, rgba(44, 33, 27, 0.78) 0%, rgba(44, 33, 27, 0.48) 42%, rgba(44, 33, 27, 0.35) 62%, rgba(44, 33, 27, 0.24) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 22% 14%, rgba(201,169,110,0.24) 0%, transparent 30%), radial-gradient(circle at 88% 88%, rgba(201,169,110,0.14) 0%, transparent 34%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24 w-full">
        <div
          className="w-full max-w-3xl rounded-[28px] px-6 sm:px-10 py-10 sm:py-12"
          style={{
            backgroundColor: "rgba(38, 29, 24, 0.48)",
            border: "1px solid rgba(253, 246, 240, 0.18)",
            backdropFilter: "blur(3px)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="w-10 h-[1px]"
              style={{ backgroundColor: "rgba(232, 213, 196, 0.9)" }}
            />
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#f4d8a5",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {content.monthLabel}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 7vw, 92px)",
              fontWeight: 600,
              color: "#fff4ec",
              lineHeight: 1.03,
            }}
          >
            {content.titleLineOne}
          </h1>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(44px, 7vw, 96px)",
              fontWeight: 700,
              color: "#a9d08a",
              lineHeight: 1.03,
              marginTop: "2px",
              fontStyle: "italic",
            }}
          >
            {content.titleLineTwo}
          </h2>

          <p
            style={{
              marginTop: "20px",
              fontFamily: "'Lato', sans-serif",
              fontSize: "clamp(16px, 2.2vw, 21px)",
              fontWeight: 300,
              color: "#f8e9dc",
              lineHeight: 1.6,
              maxWidth: "720px",
            }}
          >
            {content.subtitle}
            <br />
            <span style={{ color: "#f4d8a5" }}>{content.subtitleHighlight}</span>
          </p>

          {hasActions && (
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {content.showGalleryButton && (
                <button
                  onClick={onScrollToGallery}
                  className="px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor: "#4a6741",
                    color: "#fdf6f0",
                    border: "none",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                  }}
                >
                  {content.galleryButtonLabel}
                </button>
              )}

              {content.showWhatsAppButton && (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor: "rgba(253, 246, 240, 0.92)",
                    color: "#3a2e26",
                    border: "1px solid rgba(232, 213, 196, 0.9)",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                  }}
                >
                  <MessageCircle size={16} />
                  {content.whatsAppButtonLabel}
                </a>
              )}

              {extraButtons.map((button) => {
                const { target, rel } = getButtonTarget(button);

                return (
                  <a
                    key={button.id}
                    href={button.url}
                    target={target}
                    rel={rel}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      ...getExtraButtonStyle(button.variant),
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textDecoration: "none",
                    }}
                  >
                    {button.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={onScrollToGallery}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity"
        style={{ border: "none", background: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "10px",
            color: "#f8e9dc",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Explorar
        </span>
        <ChevronDown size={18} color="#f8e9dc" className="animate-bounce" />
      </button>
    </section>
  );
}
