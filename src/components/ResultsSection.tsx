
import { TrendingUp, Chart } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      company: "Spectre Latvia",
      challenge: "Inefficiency and financial losses",
      solution: "Led restructuring and operational overhaul",
      impact: "+20% efficiency and profitability within 2 years",
      icon: <TrendingUp size={40} className="text-consultant-blue-500" />
    },
    {
      company: "Livonia Print",
      challenge: "High production costs",
      solution: "Implemented ISO-certified management system",
      impact: "Saved €350,000 in the first year",
      icon: <Chart size={40} className="text-consultant-blue-500" />
    },
    {
      company: "Aerodium",
      challenge: "Scaling R&D and logistics operations",
      solution: "Led process optimization and procurement strategy",
      impact: "Boosted market share and profitability",
      icon: <TrendingUp size={40} className="text-consultant-blue-500" />
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
                <h3 className="text-xl font-bold text-consultant-navy">{result.company}</h3>
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
