
import { Phone, Mail, Linkedin } from "lucide-react";
import { translations } from "@/data/translations";

interface ContactSectionProps {
  currentLanguage: string;
}

const ContactSection = ({ currentLanguage }: ContactSectionProps) => {
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 mx-auto">
            <img 
              src="/lovable-uploads/fdd4e37c-ca27-49a4-ad22-42380e5adf65.png" 
              alt="Didzis Piļāns" 
              className="w-64 h-80 mx-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          
          <h2 className="text-3xl font-bold mb-8">{t.contact.title}</h2>
          <p className="text-xl font-medium text-consultant-gray-700 mb-10">{t.contact.subtitle}</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <a href="tel:+37129448407" className="flex items-center gap-3 text-consultant-gray-700 hover:text-consultant-navy transition-colors">
              <Phone size={24} />
              <span>+371 29448407</span>
            </a>
            
            <a href="mailto:didzis@pilans.eu" className="flex items-center gap-3 text-consultant-gray-700 hover:text-consultant-navy transition-colors">
              <Mail size={24} />
              <span>didzis@pilans.eu</span>
            </a>
            
            <a href="https://www.linkedin.com/in/didzis-pilans" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-consultant-gray-700 hover:text-consultant-navy transition-colors">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
