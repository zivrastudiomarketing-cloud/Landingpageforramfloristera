import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchFilters } from "./components/SearchFilters";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AdminPanel } from "./components/AdminPanel";
import type { Arrangement } from "./components/data/arrangements";
import {
  getProductsFromStorage,
  persistProductsToStorage,
} from "./components/data/productsStore";

const isAdminPath = () => {
  if (typeof window === "undefined") return false;

  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path.startsWith("/admin") || hash === "#admin" || hash === "#/admin";
};

export default function App() {
  const [products, setProducts] = useState<Arrangement[]>(() =>
    getProductsFromStorage()
  );
  const [isAdminView, setIsAdminView] = useState<boolean>(() => isAdminPath());
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [searchFilters, setSearchFilters] = useState<any>(null);

  useEffect(() => {
    persistProductsToStorage(products);
  }, [products]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncPath = () => setIsAdminView(isAdminPath());
    window.addEventListener("hashchange", syncPath);
    window.addEventListener("popstate", syncPath);

    return () => {
      window.removeEventListener("hashchange", syncPath);
      window.removeEventListener("popstate", syncPath);
    };
  }, []);

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

  if (isAdminView) {
    return <AdminPanel products={products} onProductsChange={setProducts} />;
  }

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
        <Gallery searchFilters={searchFilters} products={products} />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
