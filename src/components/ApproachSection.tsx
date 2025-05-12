
import { FileSearch, FileChartLine, Users, Rocket } from "lucide-react";

const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment & Analysis",
      description: "A deep dive into your operations, processes, and goals to identify challenges and opportunities.",
      icon: <FileSearch size={28} className="text-white" />
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Co-create a roadmap tailored to your business objectives and long-term vision.",
      icon: <FileChartLine size={28} className="text-white" />
    },
    {
      number: "03",
      title: "Execution & Coaching",
      description: "Hands-on support, workshops, and leadership coaching to guide your team through change.",
      icon: <Users size={28} className="text-white" />
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description: "Equip your business with tools and mindset to adapt and evolve long after the project ends.",
      icon: <Rocket size={28} className="text-white" />
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">My 4-Step Approach to Sustainable Results</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-consultant-blue-200 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot and icon */}
                <div className="absolute md:static left-0 top-0 md:flex md:w-1/2 md:justify-center z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-consultant-blue-500 shadow-lg">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}>
                  <div className={`bg-white border-t-4 border-consultant-blue-500 rounded-lg shadow-md p-6 pt-8`}>
                    <div className="absolute -top-10 -left-4 text-6xl font-bold text-consultant-blue-100 md:static md:block md:text-7xl md:opacity-25 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:z-0">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-consultant-navy mb-4 relative z-10">{step.title}</h3>
                    <p className="text-consultant-gray-700 relative z-10">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
