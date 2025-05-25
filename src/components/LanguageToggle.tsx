
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="min-w-[50px]"
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === 'lv' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('lv')}
        className="min-w-[50px]"
      >
        LV
      </Button>
    </div>
  );
};

export default LanguageToggle;
