
import { Award, CheckCheck, Target, Briefcase, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    { 
      text: "20+ years of leadership experience across Europe", 
      icon: <Calendar className="text-consultant-blue-500 mr-3" size={22} /> 
    },
    { 
      text: "Expert in manufacturing, construction, food, and apparel industries", 
      icon: <Briefcase className="text-consultant-blue-500 mr-3" size={22} /> 
    },
    { 
      text: "Co-founder of several successful ventures", 
      icon: <Users className="text-consultant-blue-500 mr-3" size={22} /> 
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">Meet Didzis Piļāns</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-3/5">
            <p className="text-xl font-medium text-consultant-blue-600 mb-4">
              Business transformation expert. Team leader. Change maker.
            </p>
            
            <div className="mb-6 p-4 bg-consultant-blue-50 rounded-lg border-l-4 border-consultant-blue-500">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center mb-3 last:mb-0">
                  {item.icon}
                  <span className="text-lg text-consultant-navy font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-consultant-gray-700 mb-6">
              I specialize in turning complexity into clarity. I've led strategic change in large companies and helped fast-growing startups structure their success. As a certified Lean and Six Sigma professional, I know how to balance strategy with action.
            </p>
          </div>

          <div className="md:w-2/5">
            <Card className="bg-consultant-blue-50 shadow-lg border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-consultant-navy mb-6">Credentials:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Award className="text-consultant-blue-600 mr-3" size={24} />
                    <span className="text-lg">Professional MBA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCheck className="text-consultant-blue-600 mr-3" size={24} />
                    <span className="text-lg">Lean Expert</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCheck className="text-consultant-blue-600 mr-3" size={24} />
                    <span className="text-lg">Six Sigma Green Belt</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="text-consultant-blue-600 mr-3" size={24} />
                    <span className="text-lg">Certified Google Project Manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
