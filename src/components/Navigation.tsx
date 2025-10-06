import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { LanguageToggle } from "./LanguageToggle";

interface NavigationProps {
  isArabic: boolean;
  onToggleLanguage: () => void;
}

export const Navigation = ({ isArabic, onToggleLanguage }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    ar: [
      { label: "الرئيسية", href: "#home" },
      { label: "من نحن", href: "#about" },
      { label: "خدماتنا", href: "#services" },
      { label: "استشارات مرئية", href: "#videos" },
      { label: "تواصل معنا", href: "#contact" },
    ],
    en: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Video Consultations", href: "#videos" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const items = isArabic ? menuItems.ar : menuItems.en;

  const handleClick = (href: string) => {
    const element = document.querySelector(href === "#home" ? "body" : href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            {isArabic ? "فيصل الغامدي" : "Faisal Alghamdi"}
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle isArabic={isArabic} onToggle={onToggleLanguage} />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageToggle isArabic={isArabic} onToggle={onToggleLanguage} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-primary/20 py-4 md:hidden">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="block w-full py-2 text-start text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
