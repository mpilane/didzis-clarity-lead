import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-consultant-navy font-heading font-bold text-xl">Didzis Piļāns
      </a>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-consultant-navy p-2">
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-consultant-gray-700 hover:text-consultant-blue-600">
            About
          </a>
          <a href="#services" className="text-consultant-gray-700 hover:text-consultant-blue-600">
            Services
          </a>
          <a href="#approach" className="text-consultant-gray-700 hover:text-consultant-blue-600">
            Approach
          </a>
          <a href="#results" className="text-consultant-gray-700 hover:text-consultant-blue-600">
            Results
          </a>
          <a href="#contact" className="text-consultant-gray-700 hover:text-consultant-blue-600">
            Contact
          </a>
          <Button className="bg-consultant-blue-600 hover:bg-consultant-blue-700">
            Let's Talk
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4">
            <a href="#about" className="text-consultant-gray-700 hover:text-consultant-blue-600 p-2" onClick={toggleMenu}>
              About
            </a>
            <a href="#services" className="text-consultant-gray-700 hover:text-consultant-blue-600 p-2" onClick={toggleMenu}>
              Services
            </a>
            <a href="#approach" className="text-consultant-gray-700 hover:text-consultant-blue-600 p-2" onClick={toggleMenu}>
              Approach
            </a>
            <a href="#results" className="text-consultant-gray-700 hover:text-consultant-blue-600 p-2" onClick={toggleMenu}>
              Results
            </a>
            <a href="#contact" className="text-consultant-gray-700 hover:text-consultant-blue-600 p-2" onClick={toggleMenu}>
              Contact
            </a>
            <Button className="bg-consultant-blue-600 hover:bg-consultant-blue-700">
              Let's Talk
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;