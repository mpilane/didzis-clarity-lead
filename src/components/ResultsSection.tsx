
import { TrendingUp, BarChart, Globe, Users, Building } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { translations } from "@/data/translations";

interface ResultsSectionProps {
  currentLanguage: string;
}

const ResultsSection = ({ currentLanguage }: ResultsSectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const t = translations[currentLanguage as keyof typeof translations];

  const icons = [
    <TrendingUp size={40} className="text-consultant-blue-500" />,
    <BarChart size={40} className="text-consultant-blue-500" />,
    <TrendingUp size={40} className="text-consultant-blue-500" />,
    <Globe size={40} className="text-consultant-blue-500" />,
    <Users size={40} className="text-consultant-blue-500" />,
    <Building size={40} className="text-consultant-blue-500" />
  ];

  const logos = [
    "/lovable-uploads/3e4d9e8a-b2d3-4f41-9382-fb9d4c494883.png",
    "/lovable-uploads/d56571f7-bbe1-4389-86c8-417d8e90feaa.png",
    "/lovable-uploads/f1321ae8-4183-448c-b334-c026c1584faf.png",
    "/lovable-uploads/ceb65e96-9468-4bd6-9171-644a72d13527.png",
    "/lovable-uploads/07c0df81-1b09-409c-80b0-fdd718614ae7.png",
    "/lovable-uploads/3f2f6533-01fb-4e08-bfda-44ceddd7bf8f.png"
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center">{t.results.title}</h2>

        <div className="relative max-w-7xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-2 md:-ml-4">
              {t.results.items.map((result, index) => (
                <div key={index} className="pl-2 md:pl-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex flex-col items-center">
                        {logos[index] ? (
                          <div className="h-28 w-48 flex items-center justify-center mb-2">
                            <img src={logos[index]} alt={`${result.company} logo`} className="max-h-full max-w-full object-contain" />
                          </div>
                        ) : (
                          <div className="h-28 w-48 flex items-center justify-center mb-2">
                            <h4 className="text-lg font-bold text-consultant-navy text-center">{result.company}</h4>
                          </div>
                        )}
                        {logos[index] && <p className="text-sm font-medium text-consultant-gray-500">{result.company}</p>}
                      </div>
                      {icons[index]}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-consultant-gray-500">
                          {currentLanguage === 'lv' ? 'Izaicinājums:' : 'Challenge:'}
                        </p>
                        <p className="text-consultant-gray-700">{result.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-consultant-gray-500">
                          {currentLanguage === 'lv' ? 'Risinājums:' : 'Solution:'}
                        </p>
                        <p className="text-consultant-gray-700">{result.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-consultant-gray-500">
                          {currentLanguage === 'lv' ? 'Rezultāts:' : 'Impact:'}
                        </p>
                        <p className="font-medium text-consultant-navy">{result.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons with better mobile positioning */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow z-10"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow z-10"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Interactive scroll indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {t.results.items.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-consultant-navy' : 'bg-consultant-gray-300'
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
