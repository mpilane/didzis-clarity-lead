
import { Button } from "@/components/ui/button";
import { translations } from "@/data/translations";

interface HeroSectionProps {
  currentLanguage: string;
}

const HeroSection = ({ currentLanguage }: HeroSectionProps) => {
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-consultant-blue-50 via-white to-consultant-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-consultant-navy mb-6 leading-tight font-bold text-center">
            {t.hero.title}
            {t.hero.subtitle && (
              <>
                <br />
                <span className="text-consultant-blue-600">{t.hero.subtitle}</span>
              </>
            )}
          </h1>
          <p className="text-xl text-consultant-gray-700 mb-8 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
