import type { HeroContent } from "./data/heroStore";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="w-full md:px-6 lg:px-10 xl:px-12 md:pt-6">
      <div className="relative w-full aspect-[16/9] overflow-hidden md:max-w-6xl lg:max-w-[1180px] xl:max-w-[1260px] md:mx-auto">
        <img
          src={content.bannerImage}
          alt="Banner principal RAME"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
      </div>
    </section>
  );
}
