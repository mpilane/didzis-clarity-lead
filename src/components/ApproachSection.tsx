
import { FileSearch, FileChartLine, Users, Rocket } from "lucide-react";
import { translations } from "@/data/translations";

interface ApproachSectionProps {
  currentLanguage: string;
}

const ApproachSection = ({ currentLanguage }: ApproachSectionProps) => {
  const t = translations[currentLanguage as keyof typeof translations];
  
  const icons = [
    <FileSearch size={48} className="text-white" />,
    <FileChartLine size={48} className="text-white" />,
    <Users size={48} className="text-white" />,
    <Rocket size={48} className="text-white" />
  ];

  return (
    <section id="approach" className="py-20 bg-consultant-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center">{t.approach.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.approach.steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border-t-4 border-consultant-blue-600">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-consultant-navy mb-6">
                {icons[index]}
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-consultant-blue-600 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-consultant-navy mb-4">{step.title}</h3>
                <p className="text-consultant-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
