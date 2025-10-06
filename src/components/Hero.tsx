import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  isArabic: boolean;
}

export const Hero = ({ isArabic }: HeroProps) => {
  const content = {
    ar: {
      title: "المحامي والموثق فيصل الغامدي",
      subtitle: "خدمات شرعية وقانونية بخبرة وكفاءة",
      cta1: "احجز موعد",
      cta2: "تواصل عبر واتساب",
    },
    en: {
      title: "Lawyer & Notary Faisal Alghamdi",
      subtitle: "Legal and Sharia Services with Experience and Integrity",
      cta1: "Book Appointment",
      cta2: "Chat on WhatsApp",
    },
  };

  const text = isArabic ? content.ar : content.en;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-lg border-2 border-primary opacity-50" />
            <div className="absolute -left-8 -top-8 h-16 w-16 border-l-4 border-t-4 border-primary" />
            <div className="absolute -bottom-8 -right-8 h-16 w-16 border-b-4 border-r-4 border-primary" />

            <h1 className="relative mb-6 px-8 py-4 text-5xl font-bold leading-tight text-foreground md:text-7xl">
              {text.title}
            </h1>
          </div>

          <p className="mb-12 mt-8 text-xl text-muted-foreground md:text-2xl">
            {text.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {text.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary px-8 py-6 text-lg font-semibold text-foreground hover:bg-primary/20"
              onClick={() => window.open("https://wa.me/0555822339", "_blank")}
            >
              {text.cta2}
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
