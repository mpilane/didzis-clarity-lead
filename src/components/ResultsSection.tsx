
import { TrendingUp, BarChart, Globe, Users, Building } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ResultsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

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
    },
    {
      company: "World Expo 2010 (Latvia Pavilion)",
      challenge: "Delivering a high-impact national presence at the world's largest exhibition",
      solution: "Led concept, design, and construction of Latvia's Expo pavilion from scratch",
      impact: "Created the most visited Latvian pavilion in Expo history, representing the nation on a global stage",
      icon: <Globe size={40} className="text-consultant-blue-500" />,
      logo: "/lovable-uploads/ceb65e96-9468-4bd6-9171-644a72d13527.png"
    },
    {
      company: "ITAB Latvia",
      challenge: "Low customer service levels and fragmented internal processes",
      solution: "Implemented new management systems, introduced KPIs, and decentralized decision-making",
      impact: "Raised customer service levels from 55% to 95% and established a culture of continuous improvement",
      icon: <Users size={40} className="text-consultant-blue-500" />,
      logo: "/lovable-uploads/07c0df81-1b09-409c-80b0-fdd718614ae7.png"
    },
    {
      company: "European Lingerie Group",
      challenge: "No existing business unit for ready-made garments",
      solution: "Built a new unit from scratch, led production and sales, and expanded brand portfolio by 50%",
      impact: "Reached €3M in annual contracts and successfully acquired a garment manufacturer in Belarus",
      icon: <Building size={40} className="text-consultant-blue-500" />,
      logo: "/lovable-uploads/3f2f6533-01fb-4e08-bfda-44ceddd7bf8f.png"
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center md:text-5xl">SUCCESS STORIES</h2>

        <div className="relative max-w-7xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {results.map((result, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex flex-col items-center">
                        {result.logo ? (
                          <div className="h-28 w-48 flex items-center justify-center mb-2">
                            <img src={result.logo} alt={`${result.company} logo`} className="max-h-full max-w-full object-contain" />
                          </div>
                        ) : (
                          <div className="h-28 w-48 flex items-center justify-center mb-2">
                            <h4 className="text-lg font-bold text-consultant-navy text-center">{result.company}</h4>
                          </div>
                        )}
                        {result.logo && <p className="text-sm font-medium text-consultant-gray-500">{result.company}</p>}
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
                        <p className="font-medium text-consultant-navy">{result.impact}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Interactive scroll indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-consultant-blue-500' : 'bg-consultant-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
