
import { TrendingUp, BarChart } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      company: "Spectre Latvia",
      challenge: "Inefficiency and financial losses",
      solution: "Led restructuring and operational overhaul",
      impact: "+20% efficiency and profitability within 2 years",
      icon: <TrendingUp size={40} className="text-consultant-blue-500" />,
      logo: "/lovable-uploads/3e4d9e8a-b2d3-4f41-9382-fb9d4c494883.png"
    },
    {
      company: "Livonia Print",
      challenge: "High production costs",
      solution: "Implemented ISO-certified management system",
      impact: "Saved €350,000 in the first year",
      icon: <BarChart size={40} className="text-consultant-blue-500" />,
      logo: "/lovable-uploads/d56571f7-bbe1-4389-86c8-417d8e90feaa.png"
    },
    {
      company: "Aerodium",
      challenge: "Scaling R&D and logistics operations",
      solution: "Led process optimization and procurement strategy",
      impact: "Boosted market share and profitability",
      icon: <TrendingUp size={40} className="text-consultant-blue-500" />,
      logo: "/lovable-uploads/f1321ae8-4183-448c-b334-c026c1584faf.png"
    }
  ];

  return (
    <section id="results" className="py-20 bg-consultant-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-consultant-navy">{result.company}</h3>
                  <div className="h-16 w-24 mt-2 flex items-center">
                    <img src={result.logo} alt={`${result.company} logo`} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
                {result.icon}
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-consultant-gray-500">Challenge:</p>
                  <p className="text-consultant-gray-700">{result.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-consultant-gray-500">Solution:</p>
                  <p className="text-consultant-gray-700">{result.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-consultant-gray-500">Impact:</p>
                  <p className="font-medium text-consultant-blue-600">{result.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
