import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { VideoConsultation } from "@/components/VideoConsultation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [isArabic, setIsArabic] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 120,
      delay: 80,
      anchorPlacement: "top-bottom",
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation isArabic={isArabic} onToggleLanguage={() => setIsArabic(!isArabic)} />
      <div data-aos="fade">
        <Hero isArabic={isArabic} />
      </div>
      <div data-aos="fade-up">
        <About isArabic={isArabic} />
      </div>
      <div data-aos="fade-up">
        <Services isArabic={isArabic} />
      </div>
      <div data-aos="fade-up">
        <VideoConsultation isArabic={isArabic} />
      </div>
      <div data-aos="fade-up">
        <Contact isArabic={isArabic} />
      </div>
      <div data-aos="fade">
        <Footer isArabic={isArabic} />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
