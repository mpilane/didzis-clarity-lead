import { Phone, Mail, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Avatar className="h-24 w-24 mb-8 mx-auto">
            <AvatarImage src="/lovable-uploads/4fba1ee1-3b7d-4df7-b920-858e2a8c3b43.png" alt="Didzis Piļāns" className="object-cover" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          
          <h2 className="text-3xl font-bold mb-8">Didzis Piļāns</h2>
          <p className="text-xl font-medium text-consultant-gray-700 mb-10">Business Consultant</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <a href="tel:+37129448407" className="flex items-center gap-3 text-consultant-gray-700 hover:text-consultant-navy transition-colors">
              <Phone size={24} />
              <span>+371 29448407</span>
            </a>
            
            <a href="mailto:dpilans@gmail.com" className="flex items-center gap-3 text-consultant-gray-700 hover:text-consultant-navy transition-colors">
              <Mail size={24} />
              <span>dpilans@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/didzis-pilans" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-consultant-gray-700 hover:text-consultant-navy transition-colors">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;