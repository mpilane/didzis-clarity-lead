
import { Button } from "@/components/ui/button";
import { translations } from "@/data/translations";

interface CtaSectionProps {
  currentLanguage: string;
}

const CtaSection = ({ currentLanguage }: CtaSectionProps) => {
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-20 bg-consultant-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          {t.cta.description}
        </p>
        <a 
          href="https://www.linkedin.com/in/didzis-pilans" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-consultant-navy hover:bg-consultant-gray-100 py-6 px-10 text-lg">
            {t.cta.buttonText}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
