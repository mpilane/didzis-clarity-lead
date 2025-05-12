
import { Award, CheckCheck, Target, Briefcase, Users, Calendar, BarChart, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  const highlights = [{
    text: "20+ years of leadership experience across Europe",
    icon: <Calendar className="text-consultant-navy mr-3" size={22} />
  }, {
    text: "Expert in manufacturing, construction, food, and apparel industries",
    icon: <Briefcase className="text-consultant-navy mr-3" size={22} />
  }, {
    text: "Co-founder of several successful ventures",
    icon: <Users className="text-consultant-navy mr-3" size={22} />
  }];
  
  const keyStrengths = [{
    title: "Business transformation",
    description: "Restructuring companies for long-term growth",
    icon: <BarChart className="text-white" size={24} />
  }, {
    title: "Process optimization",
    description: "Cutting costs and boosting output with smarter systems",
    icon: <CheckCheck className="text-white" size={24} />
  }, {
    title: "Team leadership",
    description: "Building high-performing teams through change and innovation",
    icon: <Users className="text-white" size={24} />
  }, {
    title: "Workshops & coaching",
    description: "Guiding leaders to define clear purpose and drive better decisions",
    icon: <Book className="text-white" size={24} />
  }];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">MEET DIDZIS PIĻĀNS</h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-12">
          <div className="md:w-1/3">
            <div className="about-card h-full">
              <h3 className="text-xl font-bold text-consultant-navy mb-6">EXPERIENCE HIGHLIGHTS:</h3>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {item.icon}
                    <span className="text-consultant-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="about-card h-full">
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-white shadow-lg border-l-4 border-consultant-navy h-full">
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

          <Card className="bg-white shadow-lg border-l-4 border-consultant-navy md:col-span-2 h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-consultant-navy mb-6">KEY STRENGTHS:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyStrengths.map((strength, index) => <div key={index} className="flex">
                    <div className="mr-4 p-2 bg-consultant-navy rounded-full h-10 w-10 flex items-center justify-center">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-consultant-navy">{strength.title}</h4>
                      <p className="text-consultant-gray-700">{strength.description}</p>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
