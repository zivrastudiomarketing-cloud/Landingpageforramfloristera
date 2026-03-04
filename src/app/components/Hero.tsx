import type { HeroContent } from "./data/heroStore";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-75px)] overflow-hidden">
      <img
        src={content.bannerImage}
        alt="Banner principal RAME"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
