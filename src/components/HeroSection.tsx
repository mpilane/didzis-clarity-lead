
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-consultant-blue-50 via-white to-consultant-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-consultant-navy mb-6 leading-tight">
              Transform Your Business.{" "}
              <span className="text-consultant-blue-600">Lead with Clarity.</span>
            </h1>
            <p className="text-xl text-consultant-gray-700 mb-8 max-w-xl">
              With over 20 years of international experience, I help businesses grow through strategic transformation, process optimization, and empowered teams.
            </p>
            <Button className="bg-consultant-blue-600 hover:bg-consultant-blue-700 text-white py-6 px-8 text-lg">
              Schedule a Free Intro Call
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="public/lovable-uploads/4fba1ee1-3b7d-4df7-b920-858e2a8c3b43.png" 
              alt="Didzis Piļāns - Business Transformation Expert" 
              className="rounded-lg shadow-xl max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
