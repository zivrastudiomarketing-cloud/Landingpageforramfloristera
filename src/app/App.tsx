import { useRef, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchFilters } from "./components/SearchFilters";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [searchFilters, setSearchFilters] = useState<any>(null);

  const scrollToSection = (section: string) => {
    if (section === "hero") {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "gallery") {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFilter = (filters: any) => {
    setSearchFilters(filters);
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'Lato', sans-serif",
        backgroundColor: "#fdf6f0",
        minHeight: "100vh",
      }}
    >
      <Header onNavClick={scrollToSection} />

      <div ref={heroRef}>
        <Hero onScrollToGallery={() => scrollToSection("gallery")} />
      </div>

      <SearchFilters onFilter={handleFilter} />

      <div ref={galleryRef}>
        <Gallery searchFilters={searchFilters} />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
