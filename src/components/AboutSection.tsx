import { Award, CheckCheck, Target, Briefcase, Users, Calendar, BarChart, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  const highlights = [{
    text: "20+ years of leadership experience across Europe",
    icon: <Calendar className="text-consultant-blue-500 mr-3" size={22} />
  }, {
    text: "Expert in manufacturing, construction, food, and apparel industries",
    icon: <Briefcase className="text-consultant-blue-500 mr-3" size={22} />
  }, {
    text: "Co-founder of several successful ventures",
    icon: <Users className="text-consultant-blue-500 mr-3" size={22} />
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
  return <section id="about" className="py-20 bg-consultant-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16 uppercase">MEET DIDZIS PIĻĀNS</h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="md:w-1/3">
            <p className="text-consultant-blue-300 mb-4 text-3xl text-left font-medium">
              Business transformation expert. Team leader. Change maker.
            </p>
            
            
          </div>

          <div className="md:w-2/3">
            <p className="text-lg text-white mb-6">With more than 20 years of leadership experience across Europe and industries like manufacturing, construction, food, and apparel, I specialize in turning complexity into clarity. 


I've led strategic change in large companies — including restoring profitability at Spectre Latvia through a 20% efficiency gain — and helped fast-growing startups structure their success.</p>
            <p className="text-lg text-white mb-6">
              As a co-founder of multiple ventures and a certified Lean and Six Sigma professional, I balance strategic thinking with practical execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-consultant-navy-800 shadow-lg border-none md:col-span-1 h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-6">CREDENTIALS:</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Award className="text-consultant-blue-400 mr-3" size={24} />
                  <span className="text-lg text-white">Professional MBA</span>
                </li>
                <li className="flex items-center">
                  <CheckCheck className="text-consultant-blue-400 mr-3" size={24} />
                  <span className="text-lg text-white">Lean Expert</span>
                </li>
                <li className="flex items-center">
                  <CheckCheck className="text-consultant-blue-400 mr-3" size={24} />
                  <span className="text-lg text-white">Six Sigma Green Belt</span>
                </li>
                <li className="flex items-center">
                  <Target className="text-consultant-blue-400 mr-3" size={24} />
                  <span className="text-lg text-white">Certified Google Project Manager</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-consultant-navy-800 shadow-lg border-none md:col-span-2 h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-6">KEY STRENGTHS:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyStrengths.map((strength, index) => <div key={index} className="flex">
                    <div className="mr-4 p-2 bg-consultant-blue-600 rounded-full h-10 w-10 flex items-center justify-center">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-consultant-blue-300">{strength.title}</h4>
                      <p className="text-white">{strength.description}</p>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;