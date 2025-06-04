
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User } from "lucide-react";
import { translations } from "@/data/translations";

interface ContactFormProps {
  currentLanguage: string;
}

const ContactForm = ({ currentLanguage }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = translations[currentLanguage as keyof typeof translations];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data to dpilans@gmail.com
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);

    const mailtoLink = `mailto:dpilans@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-consultant-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-consultant-navy">{t.contactForm.title}</h2>
            <p className="text-lg text-consultant-gray-700">
              {t.contactForm.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-consultant-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  {t.contactForm.name} *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder={t.contactForm.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-consultant-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  {t.contactForm.email} *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder={t.contactForm.emailPlaceholder}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-consultant-gray-700 mb-2">
                {t.contactForm.message} *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full"
                placeholder={t.contactForm.messagePlaceholder}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-consultant-navy hover:bg-consultant-navy/90 text-white py-3 text-lg"
            >
              {isSubmitting ? t.contactForm.sending : t.contactForm.sendButton}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
