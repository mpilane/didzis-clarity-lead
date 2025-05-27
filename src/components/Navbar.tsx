
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Navbar = ({ currentLanguage, onLanguageChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <a href="#" className="text-consultant-navy font-heading font-bold text-xl">Didzis Piļāns</a>
          <span className="text-sm text-consultant-gray-600">business consultant</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange} 
          />
          <button onClick={toggleMenu} className="text-consultant-navy p-2">
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-consultant-gray-700 hover:text-consultant-navy transition-colors">
            About
          </a>
          <a href="#services" className="text-consultant-gray-700 hover:text-consultant-navy transition-colors">
            Services
          </a>
          <a href="#approach" className="text-consultant-gray-700 hover:text-consultant-navy transition-colors">
            Approach
          </a>
          <a href="#results" className="text-consultant-gray-700 hover:text-consultant-navy transition-colors">
            Results
          </a>
          <a href="#contact" className="text-consultant-gray-700 hover:text-consultant-navy transition-colors">
            Contact
          </a>
          <LanguageToggle 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange} 
          />
          <Button 
            className="bg-consultant-navy hover:bg-consultant-navy/90 transition-colors"
            onClick={() => window.open('https://linkedin.com/in/didzis-pilans', '_blank')}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4">
            <a href="#about" className="text-consultant-gray-700 hover:text-consultant-navy p-2 transition-colors" onClick={handleLinkClick}>
              About
            </a>
            <a href="#services" className="text-consultant-gray-700 hover:text-consultant-navy p-2 transition-colors" onClick={handleLinkClick}>
              Services
            </a>
            <a href="#approach" className="text-consultant-gray-700 hover:text-consultant-navy p-2 transition-colors" onClick={handleLinkClick}>
              Approach
            </a>
            <a href="#results" className="text-consultant-gray-700 hover:text-consultant-navy p-2 transition-colors" onClick={handleLinkClick}>
              Results
            </a>
            <a href="#contact" className="text-consultant-gray-700 hover:text-consultant-navy p-2 transition-colors" onClick={handleLinkClick}>
              Contact
            </a>
            <Button 
              className="bg-consultant-navy hover:bg-consultant-navy/90 transition-colors"
              onClick={() => {
                window.open('https://linkedin.com/in/didzis-pilans', '_blank');
                handleLinkClick();
              }}
            >
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
