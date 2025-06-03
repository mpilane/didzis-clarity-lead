
import { translations } from "@/data/translations";
interface AboutSectionProps {
  currentLanguage: string;
}
const AboutSection = ({
  currentLanguage
}: AboutSectionProps) => {
  const t = translations[currentLanguage as keyof typeof translations];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center">{t.about.title}</h2>

        <div className="flex justify-center mb-12">
          <img alt="Didzis Piļāns - Business Transformation Expert" src="/lovable-uploads/ce7ccd9d-0759-40df-8d35-f2e7b7c04cc8.jpg" className="rounded-lg shadow-xl w-80 h-auto object-cover" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-consultant-gray-800 mb-6 text-left">{t.about.content[0]}</p>
          <p className="text-lg text-consultant-gray-800 mb-6 text-left">{t.about.content[1]}</p>
          
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-consultant-gray-800 mb-4 italic font-medium text-2xl">{t.about.quote}</p>
          </div>

          <p className="text-lg text-consultant-gray-800 mb-6 text-left">{t.about.content[2]}</p>
          <p className="text-lg text-consultant-gray-800 mb-6 text-left">{t.about.content[3]}</p>
        </div>
      </div>
    </section>;
};
export default AboutSection;
