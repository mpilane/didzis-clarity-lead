
const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment & Analysis",
      description: "A deep dive into your operations, processes, and goals to identify challenges and opportunities."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Co-create a roadmap tailored to your business objectives and long-term vision."
    },
    {
      number: "03",
      title: "Execution & Coaching",
      description: "Hands-on support, workshops, and leadership coaching to guide your team through change."
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description: "Equip your business with tools and mindset to adapt and evolve long after the project ends."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">My 4-Step Approach to Sustainable Results</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -top-10 -left-4 text-6xl font-bold text-consultant-blue-100">
                {step.number}
              </div>
              <div className="bg-white border-t-4 border-consultant-blue-500 rounded-lg shadow-md p-6 pt-8 h-full">
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
