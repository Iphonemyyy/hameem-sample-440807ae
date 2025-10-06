import { useState } from "react";
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

  return (
    <div className="min-h-screen">
      <Navigation isArabic={isArabic} onToggleLanguage={() => setIsArabic(!isArabic)} />
      <Hero isArabic={isArabic} />
      <About isArabic={isArabic} />
      <Services isArabic={isArabic} />
      <VideoConsultation isArabic={isArabic} />
      <Contact isArabic={isArabic} />
      <Footer isArabic={isArabic} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
