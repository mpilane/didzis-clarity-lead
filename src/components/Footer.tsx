
import LanguageToggle from "./LanguageToggle";

interface FooterProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Footer = ({ currentLanguage, onLanguageChange }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-consultant-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-consultant-gray-600">
          &copy; {currentYear} Didzis Piļāns. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-consultant-gray-600">Language:</span>
          <LanguageToggle 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange} 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
