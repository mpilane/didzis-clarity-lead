
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-consultant-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="text-consultant-gray-600">
          &copy; {currentYear} Didzis Piļāns. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
