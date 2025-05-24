
import { Award, CheckCheck, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AboutSection = () => {
  const keyStrengths = [
    {
      title: "Business transformation",
      description: "Expertise in restructuring companies and driving long-term profitability",
      details: [
        "Expertise in company restructuring, helping businesses turn challenges into opportunities to achieve profitability and growth.",
        "Led large-scale transformations in companies such as Spectre Latvia, increasing efficiency by 20% and ensuring profitability within two years.", 
        "Help organizations navigate fast-changing markets while staying focused on long-term strategy and profit."
      ]
    },
    {
      title: "Process optimization", 
      description: "Implementing systems and improving processes that cut costs and boost efficiency",
      details: [
        "Designed and implemented management systems and optimized processes that significantly improved efficiency and reduced costs.",
        "For example, in the case of Livonia Print, I introduced an ISO-certified system, which helped reduce production costs by over €350k in the first year.",
        "In the Aerodium project, I led R&D, procurement, and logistics process improvements, promoting technological upgrades that increased the company's market share and profitability."
      ]
    },
    {
      title: "Team leadership",
      description: "Unifying and motivating teams to drive strategic innovation", 
      details: [
        "Unified and motivated teams to work toward common goals.",
        "For instance, in projects with Schneider Electric and Spectre Latvia, I led management teams, supporting the companies' strategic growth and innovation initiatives.",
        "I effectively facilitate team collaboration and decision-making to ensure sustainable progress."
      ]
    },
    {
      title: "Workshops and coaching",
      description: "Strengthening organizational mission, values, and decision-making",
      details: [
        "Led multiple successful workshops, helping companies define their mission, vision, and core values.",
        "As a result, teams became more focused and achieved significant outcomes.", 
        "I specialize in leadership team development and support strategic decision-making processes that promote sustainable growth."
      ]
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16 text-5xl md:text-6xl">ABOUT ME</h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/3 flex justify-center">
            <img 
              alt="Didzis Piļāns - Business Transformation Expert" 
              className="rounded-lg shadow-xl max-w-sm w-full object-cover" 
              src="/lovable-uploads/4042995f-2522-49ee-a8c5-e5c2139caeb3.jpg" 
            />
          </div>
          
          <div className="lg:w-2/3 space-y-8">
            <div className="text-left">
              <p className="text-lg text-consultant-gray-800 mb-6">
                With more than two decades of leadership experience across Europe and industries like manufacturing, construction, food, and apparel, I specialize in turning complexity into clarity.
              </p>
              <p className="text-lg text-consultant-gray-800 mb-6">
                I've led strategic change in large companies — including restoring profitability at Spectre Latvia through a 20% efficiency gain — and helped fast-growing startups structure their success.
              </p>
              <p className="text-lg text-consultant-gray-800">
                As a co-founder of multiple ventures and a certified Lean and Six Sigma professional, I balance strategic thinking with practical execution.
              </p>
            </div>

            <Card className="bg-white shadow-lg border-l-4 border-consultant-navy">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-consultant-navy mb-6">CREDENTIALS:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Award className="text-consultant-navy mr-3" size={24} />
                    <span className="text-lg text-consultant-gray-700">Professional MBA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCheck className="text-consultant-navy mr-3" size={24} />
                    <span className="text-lg text-consultant-gray-700">Lean Expert</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCheck className="text-consultant-navy mr-3" size={24} />
                    <span className="text-lg text-consultant-gray-700">Six Sigma Green Belt</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="text-consultant-navy mr-3" size={24} />
                    <span className="text-lg text-consultant-gray-700">Certified Google Project Manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-consultant-navy mb-8 text-center">KEY STRENGTHS</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {keyStrengths.map((strength, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 pb-4">
                <div className="mb-2">
                  <h4 className="font-bold text-consultant-navy text-lg mb-1">{strength.title}</h4>
                  <p className="text-consultant-gray-700 mb-3">{strength.description}</p>
                  <AccordionTrigger className="text-consultant-blue-600 hover:text-consultant-blue-700 text-sm font-medium p-0 h-auto justify-start gap-2">
                    Read more
                  </AccordionTrigger>
                </div>
                <AccordionContent className="pt-0">
                  <div className="space-y-2 text-consultant-gray-700">
                    {strength.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm leading-relaxed">• {detail}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
