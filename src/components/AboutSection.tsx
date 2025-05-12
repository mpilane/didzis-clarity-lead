
import { Award, CheckCheck, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">Meet Didzis Piļāns</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-3/5">
            <p className="text-xl font-medium text-consultant-blue-600 mb-4">
              Business transformation expert. Team leader. Change maker.
            </p>
            <p className="text-lg text-consultant-gray-700 mb-6">
              With more than two decades of leadership experience across Europe and industries like manufacturing, construction, food, and apparel, I specialize in turning complexity into clarity.
            </p>
            <p className="text-lg text-consultant-gray-700 mb-6">
              I've led strategic change in large companies and helped fast-growing startups structure their success. As a co-founder of several ventures and a certified Lean and Six Sigma professional, I know how to balance strategy with action.
            </p>
          </div>

          <div className="md:w-2/5 bg-consultant-blue-50 p-8 rounded-lg shadow-md">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
