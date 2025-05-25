
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [expandedStrengths, setExpandedStrengths] = useState<number[]>([]);

  const toggleStrength = (index: number) => {
    setExpandedStrengths(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const keyStrengths = [
    {
      title: "Business transformation",
      description: "Expertise in restructuring companies and driving long-term profitability",
      details: ["Expertise in company restructuring, helping businesses turn challenges into opportunities to achieve profitability and growth.", "Led large-scale transformations in companies such as Spectre Latvia, increasing efficiency by 20% and ensuring profitability within two years.", "Help organizations navigate fast-changing markets while staying focused on long-term strategy and profit."]
    },
    {
      title: "Process optimization", 
      description: "Implementing systems and improving processes that cut costs and boost efficiency",
      details: ["Designed and implemented management systems and optimized processes that significantly improved efficiency and reduced costs.", "For example, in the case of Livonia Print, I introduced an ISO-certified system, which helped reduce production costs by over €350k in the first year.", "In the Aerodium project, I led R&D, procurement, and logistics process improvements, promoting technological upgrades that increased the company's market share and profitability."]
    },
    {
      title: "Team leadership",
      description: "Unifying and motivating teams to drive strategic innovation", 
      details: ["Unified and motivated teams to work toward common goals.", "For instance, in projects with Schneider Electric and Spectre Latvia, I led management teams, supporting the companies' strategic growth and innovation initiatives.", "I effectively facilitate team collaboration and decision-making to ensure sustainable progress."]
    },
    {
      title: "Workshops and coaching",
      description: "Strengthening organizational mission, values, and decision-making",
      details: ["Led multiple successful workshops, helping companies define their mission, vision, and core values.", "As a result, teams became more focused and achieved significant outcomes.", "I specialize in leadership team development and support strategic decision-making processes that promote sustainable growth."]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center md:text-5xl">ABOUT ME</h2>

        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3 flex justify-center">
                <img alt="Didzis Piļāns - Business Transformation Expert" src="/lovable-uploads/ce7ccd9d-0759-40df-8d35-f2e7b7c04cc8.jpg" className="rounded-lg shadow-xl max-w-sm w-full object-cover" />
              </div>
              
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg text-consultant-gray-800 mb-6">With more than 20 years of leadership experience across Europe and industries like manufacturing, construction, food, and apparel, I specialize in turning complexity into clarity.</p>
                
                <p className="text-lg text-consultant-gray-800 mb-6">With over 20 years of experience in business leadership and operational management, I've led transformation, process optimization, and team development across diverse industries - from manufacturing and food production to apparel and construction.</p>
                
                <p className="text-lg text-consultant-gray-800 mb-6">My career spans both startups and international companies, including Livonia Print, ITAB Latvia, Spectre, and Aerodium, where I've delivered measurable improvements in efficiency, culture, and growth.</p>
                
                <p className="text-lg text-consultant-gray-800">
                  My work blends strategic vision with hands-on execution — backed by a Professional MBA, Lean Expert certification, Six Sigma Green Belt, and Google Project Manager certification.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <h3 className="text-2xl font-bold text-consultant-navy mb-8 text-center">KEY STRENGTHS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyStrengths.map((strength, index) => (
                <div key={index} className="pb-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-consultant-navy text-lg mb-2">{strength.title}</h4>
                      <p className="text-consultant-gray-700 mb-3">{strength.description}</p>
                    </div>
                    <button
                      onClick={() => toggleStrength(index)}
                      className="text-consultant-navy hover:text-consultant-navy/70 transition-colors ml-3 mt-1"
                    >
                      {expandedStrengths.includes(index) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {expandedStrengths.includes(index) && (
                    <div className="space-y-2 text-consultant-gray-700 mt-4">
                      {strength.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm leading-relaxed">• {detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
