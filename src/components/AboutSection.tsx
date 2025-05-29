
import { translations } from "@/data/translations";

interface AboutSectionProps {
  currentLanguage: string;
}

const AboutSection = ({ currentLanguage }: AboutSectionProps) => {
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center">{t.about.title}</h2>

        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3 flex justify-center">
                <img alt="Didzis Piļāns - Business Transformation Expert" src="/lovable-uploads/ce7ccd9d-0759-40df-8d35-f2e7b7c04cc8.jpg" className="rounded-lg shadow-xl max-w-sm w-full object-cover" />
              </div>
              
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg text-consultant-gray-800 mb-6">{t.about.quote}</p>
                
                {t.about.content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-consultant-gray-800 mb-6">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
