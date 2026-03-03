export type HeroButtonVariant = "filled" | "outline" | "light";

export interface HeroExtraButton {
  id: string;
  label: string;
  url: string;
  variant: HeroButtonVariant;
  enabled: boolean;
  openInNewTab: boolean;
}

export interface HeroContent {
  monthLabel: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  subtitleHighlight: string;
  bannerImage: string;
  showGalleryButton: boolean;
  galleryButtonLabel: string;
  showWhatsAppButton: boolean;
  whatsAppButtonLabel: string;
  extraButtons: HeroExtraButton[];
}

const STORAGE_KEY = "rame_hero_content_v1";

interface PersistResult {
  ok: boolean;
  error?: string;
}

export const defaultHeroContent: HeroContent = {
  monthLabel: "Marzo 2026",
  titleLineOne: "Mes de la",
  titleLineTwo: "Mujer 2026",
  subtitle: "Arreglos florales con pasion, amor y elegancia.",
  subtitleHighlight: "Cada flor, una historia. Cada bouquet, un abrazo.",
  bannerImage:
    "https://images.unsplash.com/photo-1771134572111-967700a8bb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHJvc2UlMjBib3VxdWV0JTIwcGluayUyMGZsb3dlcnMlMjBlbGVnYW50fGVufDF8fHx8MTc3MjU0NzQwNXww&ixlib=rb-4.1.0&q=80&w=1600",
  showGalleryButton: true,
  galleryButtonLabel: "Ver arreglos",
  showWhatsAppButton: true,
  whatsAppButtonLabel: "Pedir por WhatsApp",
  extraButtons: [],
};

const sanitizeText = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim() ? value.trim() : fallback;

const sanitizeBoolean = (value: unknown, fallback: boolean) =>
  typeof value === "boolean" ? value : fallback;

const sanitizeVariant = (
  value: unknown,
  fallback: HeroButtonVariant
): HeroButtonVariant =>
  value === "filled" || value === "outline" || value === "light"
    ? value
    : fallback;

const sanitizeButtons = (value: unknown): HeroExtraButton[] => {
  if (!Array.isArray(value)) return [];

  return value
    .map((button, index) => {
      if (!button || typeof button !== "object") return null;
      const parsed = button as Partial<HeroExtraButton>;

      return {
        id: sanitizeText(parsed.id, `hero-btn-${index + 1}`),
        label: sanitizeText(parsed.label, ""),
        url: sanitizeText(parsed.url, ""),
        variant: sanitizeVariant(parsed.variant, "outline"),
        enabled: sanitizeBoolean(parsed.enabled, true),
        openInNewTab: sanitizeBoolean(parsed.openInNewTab, true),
      } satisfies HeroExtraButton;
    })
    .filter((button): button is HeroExtraButton => Boolean(button));
};

export const getHeroContentFromStorage = (): HeroContent => {
  if (typeof window === "undefined") return defaultHeroContent;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultHeroContent;

  try {
    const parsed = JSON.parse(raw) as Partial<HeroContent> & {
      mainImage?: string;
    };
    return {
      monthLabel: sanitizeText(parsed.monthLabel, defaultHeroContent.monthLabel),
      titleLineOne: sanitizeText(parsed.titleLineOne, defaultHeroContent.titleLineOne),
      titleLineTwo: sanitizeText(parsed.titleLineTwo, defaultHeroContent.titleLineTwo),
      subtitle: sanitizeText(parsed.subtitle, defaultHeroContent.subtitle),
      subtitleHighlight: sanitizeText(
        parsed.subtitleHighlight,
        defaultHeroContent.subtitleHighlight
      ),
      bannerImage: sanitizeText(
        parsed.bannerImage ?? parsed.mainImage,
        defaultHeroContent.bannerImage
      ),
      showGalleryButton: sanitizeBoolean(
        parsed.showGalleryButton,
        defaultHeroContent.showGalleryButton
      ),
      galleryButtonLabel: sanitizeText(
        parsed.galleryButtonLabel,
        defaultHeroContent.galleryButtonLabel
      ),
      showWhatsAppButton: sanitizeBoolean(
        parsed.showWhatsAppButton,
        defaultHeroContent.showWhatsAppButton
      ),
      whatsAppButtonLabel: sanitizeText(
        parsed.whatsAppButtonLabel,
        defaultHeroContent.whatsAppButtonLabel
      ),
      extraButtons: sanitizeButtons(parsed.extraButtons),
    };
  } catch {
    return defaultHeroContent;
  }
};

const getStorageErrorMessage = (error: unknown) => {
  if (error instanceof DOMException && error.name === "QuotaExceededError") {
    return "No hay espacio suficiente en el navegador para guardar este banner. Usa imagenes mas livianas o limpia datos del sitio.";
  }

  return "No se pudo guardar el banner en este navegador.";
};

export const persistHeroContentToStorage = (
  content: HeroContent
): PersistResult => {
  if (typeof window === "undefined") return { ok: true };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getStorageErrorMessage(error) };
  }
};

