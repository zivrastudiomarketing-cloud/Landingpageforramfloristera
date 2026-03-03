import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";

interface Filters {
  search: string;
  date: string;
  flowers: string[];
  occasion: string[];
  colors: string[];
  priceRange: string;
  sortBy: string;
}

interface SearchFiltersProps {
  onFilter: (filters: Filters) => void;
}

const DATE_OPTIONS = [
  "Día de la Mujer",
  "Día de la Madre",
  "Amor y Amistad",
  "Cumpleaños",
  "Aniversario",
  "Navidad",
];
const FLOWER_OPTIONS = [
  "Rosas",
  "Girasoles",
  "Orquídeas",
  "Peonías",
  "Tulipanes",
  "Mixtas",
];
const OCCASION_OPTIONS = [
  "Cumpleaños",
  "Condolencias",
  "Romance",
  "Gracias",
  "Graduación",
  "Decoración",
];
const COLOR_OPTIONS = [
  "Rosado",
  "Blanco",
  "Rojo",
  "Amarillo",
  "Pastel",
  "Multicolor",
];
const PRICE_OPTIONS = [
  { label: "Todos", value: "" },
  { label: "Hasta $80.000", value: "0-80000" },
  { label: "$80.000 - $150.000", value: "80000-150000" },
  { label: "$150.000 - $300.000", value: "150000-300000" },
  { label: "$300.000+", value: "300000-999999" },
];

export function SearchFilters({ onFilter }: SearchFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    date: "",
    flowers: [],
    occasion: [],
    colors: [],
    priceRange: "",
    sortBy: "recent",
  });
  const [showFilters, setShowFilters] = useState(false);

  const updateFilter = (key: keyof Filters, value: any) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
  };

  const toggleChip = (key: "flowers" | "occasion" | "colors", value: string) => {
    const arr = filters[key];
    const updated = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
    updateFilter(key, updated);
  };

  const handleSearch = () => {
    onFilter(filters);
  };

  const clearAll = () => {
    const reset: Filters = {
      search: "",
      date: "",
      flowers: [],
      occasion: [],
      colors: [],
      priceRange: "",
      sortBy: "recent",
    };
    setFilters(reset);
    onFilter(reset);
  };

  const hasActiveFilters =
    filters.search ||
    filters.date ||
    filters.flowers.length > 0 ||
    filters.occasion.length > 0 ||
    filters.colors.length > 0 ||
    filters.priceRange;

  return (
    <section
      className="w-full py-10 px-6"
      style={{ backgroundColor: "#fdf6f0" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-[1px]" style={{ backgroundColor: "#c9a96e" }} />
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
            Encuentra tu arreglo perfecto
          </span>
          <div className="w-8 h-[1px]" style={{ backgroundColor: "#c9a96e" }} />
        </div>

        {/* Search bar */}
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-4 mb-4 shadow-sm"
          style={{ backgroundColor: "#fff", border: "1.5px solid #e8d5c4" }}
        >
          <Search size={20} color="#9e7b5a" />
          <input
            type="text"
            placeholder="Busca por fecha, flor, ocasión, color…"
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 outline-none bg-transparent"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "15px",
              color: "#3a2e26",
            }}
          />
          {filters.search && (
            <button
              onClick={() => updateFilter("search", "")}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <X size={16} color="#9e7b5a" />
            </button>
          )}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl transition-colors duration-200"
            style={{
              backgroundColor: showFilters ? "#4a6741" : "#f0ebe4",
              color: showFilters ? "#fdf6f0" : "#4a6741",
              fontFamily: "'Lato', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            <SlidersHorizontal size={15} />
            Filtros
            <ChevronDown
              size={13}
              style={{
                transform: showFilters ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>
          <button
            onClick={handleSearch}
            className="px-6 py-2 rounded-xl transition-all duration-200 hover:shadow-md hover:opacity-90"
            style={{
              backgroundColor: "#4a6741",
              color: "#fdf6f0",
              fontFamily: "'Lato', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Buscar
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: "#fff", border: "1.5px solid #e8d5c4" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Dates */}
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#3a2e26",
                    marginBottom: "10px",
                  }}
                >
                  Fecha especial
                </p>
                <div className="flex flex-wrap gap-2">
                  {DATE_OPTIONS.map((opt) => (
                    <Chip
                      key={opt}
                      label={opt}
                      active={filters.date === opt}
                      onClick={() =>
                        updateFilter("date", filters.date === opt ? "" : opt)
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Flowers */}
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#3a2e26",
                    marginBottom: "10px",
                  }}
                >
                  Tipo de flor
                </p>
                <div className="flex flex-wrap gap-2">
                  {FLOWER_OPTIONS.map((opt) => (
                    <Chip
                      key={opt}
                      label={opt}
                      active={filters.flowers.includes(opt)}
                      onClick={() => toggleChip("flowers", opt)}
                    />
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#3a2e26",
                    marginBottom: "10px",
                  }}
                >
                  Ocasión
                </p>
                <div className="flex flex-wrap gap-2">
                  {OCCASION_OPTIONS.map((opt) => (
                    <Chip
                      key={opt}
                      label={opt}
                      active={filters.occasion.includes(opt)}
                      onClick={() => toggleChip("occasion", opt)}
                    />
                  ))}
                </div>
              </div>

              {/* Colors + Price */}
              <div className="flex flex-col gap-4">
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#3a2e26",
                      marginBottom: "10px",
                    }}
                  >
                    Colores
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {COLOR_OPTIONS.map((opt) => (
                      <Chip
                        key={opt}
                        label={opt}
                        active={filters.colors.includes(opt)}
                        onClick={() => toggleChip("colors", opt)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#3a2e26",
                      marginBottom: "10px",
                    }}
                  >
                    Rango de precio
                  </p>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => updateFilter("priceRange", e.target.value)}
                    className="w-full rounded-xl px-3 py-2 outline-none"
                    style={{
                      border: "1.5px solid #e8d5c4",
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "13px",
                      color: "#5a4a3a",
                      backgroundColor: "#fdf9f6",
                    }}
                  >
                    {PRICE_OPTIONS.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: "1px solid #f0e8e0" }}>
              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "13px",
                    color: "#9e7b5a",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Limpiar filtros
                </button>
              )}
              <div className="flex items-center gap-3 ml-auto">
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "13px",
                    color: "#9e7b5a",
                  }}
                >
                  Ordenar por:
                </span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilter("sortBy", e.target.value)}
                  className="rounded-xl px-3 py-2 outline-none"
                  style={{
                    border: "1.5px solid #e8d5c4",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "13px",
                    color: "#5a4a3a",
                    backgroundColor: "#fdf9f6",
                  }}
                >
                  <option value="recent">Más recientes</option>
                  <option value="price-asc">Menor precio</option>
                  <option value="price-desc">Mayor precio</option>
                  <option value="popular">Más vendidos</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-full transition-all duration-150 hover:-translate-y-0.5"
      style={{
        backgroundColor: active ? "#4a6741" : "#f5ede6",
        color: active ? "#fdf6f0" : "#5a4a3a",
        fontFamily: "'Lato', sans-serif",
        fontSize: "12px",
        fontWeight: active ? 700 : 400,
        border: active ? "1.5px solid #4a6741" : "1.5px solid #e0cfc4",
        cursor: "pointer",
        transition: "all 0.15s ease",
      }}
    >
      {label}
    </button>
  );
}
