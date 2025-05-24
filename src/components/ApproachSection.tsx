
import { FileSearch, FileChartLine, Users, Rocket } from "lucide-react";

const ApproachSection = () => {
  const steps = [{
    number: "01",
    title: "Assessment & Analysis",
    description: "A deep dive into your operations, processes, and goals to identify challenges and opportunities.",
    icon: <FileSearch size={48} className="text-white" />
  }, {
    number: "02",
    title: "Strategic Planning",
    description: "Co-create a roadmap tailored to your business objectives and long-term vision.",
    icon: <FileChartLine size={48} className="text-white" />
  }, {
    number: "03",
    title: "Execution & Coaching",
    description: "Hands-on support, workshops, and leadership coaching to guide your team through change.",
    icon: <Users size={48} className="text-white" />
  }, {
    number: "04",
    title: "Continuous Improvement",
    description: "Equip your business with tools and mindset to adapt and evolve long after the project ends.",
    icon: <Rocket size={48} className="text-white" />
  }];

  return (
    <section id="approach" className="py-20 bg-consultant-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16 uppercase text-5xl md:text-6xl">MY 4-STEP APPROACH</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border-t-4 border-consultant-blue-600">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-consultant-navy mb-6">
                {step.icon}
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
