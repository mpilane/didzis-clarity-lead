
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
  const [recommendationsEmblaRef, recommendationsEmblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedRecommendationIndex, setSelectedRecommendationIndex] = useState(0);
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
    "/assets/images/spectre-logo.png",
    "/assets/images/livonia-print-logo.png",
    "/assets/images/aerodium-logo.png",
    "/assets/images/expo-logo.png",
    "/assets/images/itab-logo.png",
    "/assets/images/european-lingerie-logo.png"
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

  useEffect(() => {
    if (!recommendationsEmblaApi) return;

    const onSelect = () => {
      setSelectedRecommendationIndex(recommendationsEmblaApi.selectedScrollSnap());
    };

    recommendationsEmblaApi.on('select', onSelect);
    onSelect();

    return () => {
      recommendationsEmblaApi.off('select', onSelect);
    };
  }, [recommendationsEmblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const scrollToRecommendation = (index: number) => {
    if (recommendationsEmblaApi) {
      recommendationsEmblaApi.scrollTo(index);
    }
  };

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center">{t.results.title}</h2>

        {/* Success Stories Carousel */}
        <div className="relative max-w-7xl mx-auto mb-20">
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
                        <p className="font-medium text-consultant-blue-500">{result.impact}</p>
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

        {/* Recommendations Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-heading font-bold mb-12 text-consultant-navy uppercase tracking-wider text-center">{t.results.recommendationsTitle}</h3>
          
          {/* Desktop view - grid layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {t.results.recommendations.map((recommendation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <blockquote className="text-lg text-consultant-gray-800 mb-4 italic">
                  "{recommendation.quote}"
                </blockquote>
                <div className="flex justify-between items-center">
                  <cite className="text-consultant-navy font-medium not-italic">{recommendation.author}</cite>
                  <a 
                    href="https://www.linkedin.com/in/didzis-pilans/details/recommendations/?detailScreenTabIndex=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-consultant-gray-400 text-sm hover:text-consultant-gray-600 transition-colors"
                  >
                    {t.results.readFullText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - carousel */}
          <div className="md:hidden relative">
            <div ref={recommendationsEmblaRef} className="overflow-hidden">
              <div className="flex -ml-2">
                {t.results.recommendations.map((recommendation, index) => (
                  <div key={index} className="pl-2 flex-[0_0_100%] min-w-0">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full">
                      <blockquote className="text-lg text-consultant-gray-800 mb-4 italic">
                        "{recommendation.quote}"
                      </blockquote>
                      <div className="flex justify-between items-center">
                        <cite className="text-consultant-navy font-medium not-italic">{recommendation.author}</cite>
                        <a 
                          href="https://www.linkedin.com/in/didzis-pilans/details/recommendations/?detailScreenTabIndex=0" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 text-sm hover:text-gray-500 transition-colors"
                        >
                          {t.results.readFullText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons for recommendations */}
            <button
              onClick={() => recommendationsEmblaApi?.scrollPrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow z-10"
              aria-label="Previous recommendation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => recommendationsEmblaApi?.scrollNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow z-10"
              aria-label="Next recommendation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scroll indicators for recommendations */}
            <div className="flex justify-center mt-8 space-x-2">
              {t.results.recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToRecommendation(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === selectedRecommendationIndex ? 'bg-consultant-navy' : 'bg-consultant-gray-300'
                  }`}
                  aria-label={`Go to recommendation ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
