
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-consultant-blue-50 via-white to-consultant-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-consultant-navy mb-6 leading-tight font-bold text-center">
            Transform Your Business.
            <br />
            <span className="text-consultant-blue-600">Lead with Clarity.</span>
          </h1>
          <p className="text-xl text-consultant-gray-700 mb-8 max-w-3xl mx-auto">
            With over 20 years of international experience, I help businesses grow through strategic transformation, process optimization, and empowered teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
