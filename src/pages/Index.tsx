
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ApproachSection from "@/components/ApproachSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar currentLanguage={language} onLanguageChange={changeLanguage} />
      <HeroSection currentLanguage={language} />
      <AboutSection currentLanguage={language} />
      <ServicesSection currentLanguage={language} />
      <ResultsSection currentLanguage={language} />
      <ApproachSection currentLanguage={language} />
      <CtaSection currentLanguage={language} />
      <ContactSection currentLanguage={language} />
      <Footer />
    </div>
  );
};

export default Index;
