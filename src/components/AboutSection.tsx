
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
            <div className="relative">
              <img 
                alt="Didzis Piļāns - Business Transformation Expert" 
                src="/lovable-uploads/ce7ccd9d-0759-40df-8d35-f2e7b7c04cc8.jpg" 
                className="float-left mr-8 mb-6 rounded-lg shadow-xl w-80 h-auto object-cover" 
              />
              
              <div className="text-content">
                <p className="text-lg text-consultant-gray-800 mb-6 italic font-medium">{t.about.quote}</p>
                
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
