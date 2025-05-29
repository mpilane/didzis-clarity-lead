
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { translations } from "@/data/translations";

interface ServicesSectionProps {
  currentLanguage: string;
}

const ServicesSection = ({ currentLanguage }: ServicesSectionProps) => {
  const [expandedServices, setExpandedServices] = useState<number[]>([]);
  const t = translations[currentLanguage as keyof typeof translations];
  
  const toggleService = (index: number) => {
    setExpandedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section id="services" className="py-20 bg-consultant-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-12 text-consultant-navy uppercase tracking-wider text-center">{t.services.title}</h2>

        <div className="flex justify-center mb-12">
          <div className="max-w-4xl w-full">
            <p className="text-lg text-consultant-gray-800 mb-8 text-center">
              {t.services.description}
            </p>

            <div className="space-y-6">
              {t.services.items.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-consultant-navy text-lg mb-2">{service.title}</h4>
                      <p className="text-consultant-gray-700 mb-3">{service.subtitle}</p>
                    </div>
                    <button 
                      onClick={() => toggleService(index)} 
                      className="text-consultant-navy hover:text-consultant-navy/70 transition-colors ml-3 mt-1"
                    >
                      {expandedServices.includes(index) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {expandedServices.includes(index) && (
                    <div className="space-y-2 text-consultant-gray-700 mt-4">
                      {service.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm leading-relaxed">• {detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-consultant-navy hover:bg-consultant-navy-800 text-white px-8 py-6 text-lg"
            onClick={() => window.open('https://www.linkedin.com/in/didzis-pilans', '_blank')}
          >
            {t.services.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
