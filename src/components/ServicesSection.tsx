
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Business Transformation Consulting",
      description: "Turn challenges into growth opportunities through tailored strategy, execution, and leadership alignment."
    },
    {
      id: 2,
      title: "Vision & Mission Workshops",
      description: "Define your company's purpose, align your team, and build a culture that drives focus and results."
    },
    {
      id: 3,
      title: "Management System Implementation",
      description: "Install clear processes and accountability structures that support sustainable growth."
    },
    {
      id: 4,
      title: "Team Coaching & Leadership Development",
      description: "Empower your team to make better decisions, improve collaboration, and drive performance."
    },
    {
      id: 5,
      title: "Process Analysis & Optimization",
      description: "Identify inefficiencies, reduce waste, and streamline operations to improve productivity."
    }
  ];

  return (
    <section id="services" className="py-20 bg-consultant-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">What I Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-8 transition duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-4 text-consultant-navy">
                {service.id}. {service.title}
              </h3>
              <p className="text-consultant-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-consultant-blue-600 hover:bg-consultant-blue-700 text-white px-8 py-6 text-lg">
            Let's Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
