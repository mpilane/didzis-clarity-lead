
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ServicesSection = () => {
  const [expandedServices, setExpandedServices] = useState<number[]>([]);
  
  const toggleService = (index: number) => {
    setExpandedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const services = [
    {
      title: "Business transformation",
      subtitle: "Restructuring, efficiency improvement, sustainable growth strategy",
      details: [
        "I help companies align their processes, structures and governance model to drive sustainable profitability",
        "Experience with both crisis situations (e.g. loss-making companies) and companies ready for the next stage of development",
        "Example: Spectre Latvia - +20% efficiency and profitability in two years"
      ]
    },
    {
      title: "Design and implementation of management systems",
      subtitle: "Structure to help teams function better",
      details: [
        "Introduce transparent processes, KPIs, roles and responsibilities",
        "Improve decision-making, interdepartmental collaboration and efficiency",
        "Example: Livonia Print - ISO certified system that reduced losses by €350,000 in the first year"
      ]
    },
    {
      title: "Process analysis and optimisation",
      subtitle: "Reduction of inefficiencies, improvement of product and service quality",
      details: [
        "Using Lean, Six Sigma and other tools to identify and eliminate bottle necks and wastage",
        "Improve supply chain, manufacturing, R&D and logistics performance",
        "Example: Aerodium - optimised international projects and development processes (e.g. China, Canada, Italy)"
      ]
    },
    {
      title: "Coaching and development of management teams",
      subtitle: "Strong management teams produce strong results",
      details: [
        "I help management teams align around a common direction, delegate more effectively and make strategic decisions",
        "Guided coaching sessions, leadership development workshops and daily mentoring programmes",
        "Experience of working with executive level teams in different countries and company cultures"
      ]
    },
    {
      title: "Strategic workshops: mission, vision and values",
      subtitle: "Clear direction is the cornerstone of everyone's growth",
      details: [
        "Leadership workshops where companies define their core elements - who we are, where we are going and how we work together",
        "The result: a more focused culture, a cohesive team and a shared vision",
        "Example: several mission/vision sessions that helped clients redefine their direction and accelerate their development"
      ]
    },
    {
      title: "An outside view from the inside",
      subtitle: "A consultant who understands how companies work from the executive chair.",
      details: [
        "Unlike \"pure\" consultants, I have experience as a business leader - I know what reality looks like not only in theory but in practice",
        "I help managers not only to solve problems, but also to bring clarity and calm in moments of chaos"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-consultant-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-12 text-consultant-navy uppercase tracking-wider text-center">WHAT I OFFER</h2>

        <div className="flex justify-center mb-12">
          <div className="max-w-4xl w-full">
            <p className="text-lg text-consultant-gray-800 mb-8 text-center">
              I provide consultancy to help companies implement structured change, develop leadership and achieve clearly measurable results.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => (
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
            Let's Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
