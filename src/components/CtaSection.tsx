
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-consultant-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something That Lasts</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Whether you're scaling, restructuring, or improving your team's effectiveness, 
          I'm here to help you move forward with clarity and confidence.
        </p>
        <a 
          href="https://www.linkedin.com/in/didzis-pilans" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-consultant-navy hover:bg-consultant-gray-100 py-6 px-10 text-lg">
            Let's Connect
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
