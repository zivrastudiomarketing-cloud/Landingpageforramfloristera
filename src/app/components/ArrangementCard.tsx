import { Eye } from "lucide-react";
import type { Arrangement } from "./data/arrangements";

interface ArrangementCardProps {
  arrangement: Arrangement;
  onClick: (arr: Arrangement) => void;
}

export function ArrangementCard({ arrangement, onClick }: ArrangementCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div
      className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 20px rgba(58,46,38,0.08)",
        border: "1px solid #f0e8e0",
      }}
      onClick={() => onClick(arrangement)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={arrangement.images[0]}
          alt={arrangement.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ backgroundColor: "rgba(58,46,38,0.35)" }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{ backgroundColor: "#fdf6f0" }}
          >
            <Eye size={15} color="#4a6741" />
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#4a6741",
              }}
            >
              Ver detalles
            </span>
          </div>
        </div>
        {/* Badge */}
        {arrangement.badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full"
            style={{
              backgroundColor: "#4a6741",
              color: "#fdf6f0",
              fontFamily: "'Lato', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {arrangement.badge}
          </div>
        )}
        {/* Price badge */}
        <div
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl shadow-md"
          style={{
            backgroundColor: "rgba(253,246,240,0.95)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#3a2e26",
            }}
          >
            {formatPrice(arrangement.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "17px",
            fontWeight: 600,
            color: "#3a2e26",
            lineHeight: 1.3,
          }}
        >
          {arrangement.name}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {arrangement.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "#f5ede6",
                color: "#7a5a4a",
                fontFamily: "'Lato', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-1">
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "11px",
              color: "#9e7b5a",
            }}
          >
            🌿 {arrangement.flowers.join(" · ")}
          </span>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors duration-150 hover:bg-[#4a6741] hover:text-[#fdf6f0]"
            style={{
              backgroundColor: "#f0ebe4",
              color: "#4a6741",
              fontFamily: "'Lato', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick(arrangement);
            }}
          >
            <Eye size={12} />
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}
