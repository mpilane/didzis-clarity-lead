
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-consultant-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Avatar className="h-16 w-16 mb-4">
          <AvatarImage src="/lovable-uploads/4fba1ee1-3b7d-4df7-b920-858e2a8c3b43.png" alt="Didzis Piļāns" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <p className="text-consultant-gray-600">
          &copy; {currentYear} Didzis Piļāns. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
