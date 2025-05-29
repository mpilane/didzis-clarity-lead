
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="h-8 px-2 text-xs font-medium"
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === 'lv' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('lv')}
        className="h-8 px-2 text-xs font-medium"
      >
        LV
      </Button>
    </div>
  );
};

export default LanguageToggle;
