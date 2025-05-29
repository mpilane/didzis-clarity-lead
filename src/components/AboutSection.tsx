
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold mb-16 text-consultant-navy uppercase tracking-wider text-center">ABOUT ME</h2>

        <div className="flex justify-center mb-16">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3 flex justify-center">
                <img alt="Didzis Piļāns - Business Transformation Expert" src="/lovable-uploads/ce7ccd9d-0759-40df-8d35-f2e7b7c04cc8.jpg" className="rounded-lg shadow-xl max-w-sm w-full object-cover" />
              </div>
              
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg text-consultant-gray-800 mb-6">"I believe that the foundation of growth is clarity. When a company has a purpose, a structure and a team that knows where it is going - results follow."</p>
                
                <p className="text-lg text-consultant-gray-800 mb-6">I have been leading business change and processes for over 20 years - in manufacturing, construction, food and apparel industries, both in Latvia and internationally. I have worked with companies ranging from start-ups to leading international organisations such as Spectre Latvia, ITAB, Livonia Print, Aerodium, Schneider Electric.</p>
                
                <p className="text-lg text-consultant-gray-800 mb-6">My strengths are structured thinking, systemic thinking and the ability to make the complex simple. At management level, I have restructured companies, implemented management systems, increased efficiency and helped teams make better decisions.</p>

                <p className="text-lg text-consultant-gray-800 mb-6">I have a professional MBA degree, as well as Lean Expert, Six Sigma Green Belt and Google Project Management certifications. My consulting is based on both strategic insight and practical experience - tested in real life.</p>

                <p className="text-lg text-consultant-gray-800">Outside of work, I am an endurance sports enthusiast - a former triathlete and still an active cyclist. This experience has taught me long-term thinking, discipline, the ability to cope with difficulties and to focus on the goal, even when results are not yet visible. It is these qualities that I bring to my work with clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
