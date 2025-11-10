import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Phone, MessageCircle, Mail, Building2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyConsent: false,
  });

  const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    email: z.string().trim().email("Invalid email address").max(255),
    phone: z.string().trim().min(1, "Phone is required").max(20),
    message: z.string().trim().min(1, "Message is required").max(1000),
    privacyConsent: z.boolean().refine((val) => val === true, {
      message: "You must accept the privacy policy",
    }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      // Encode data for WhatsApp
      const message = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      );
      
      window.open(`https://wa.me/393891430907?text=${message}`, "_blank");
      
      toast({
        title: t.success,
        duration: 3000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        privacyConsent: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: error.errors[0].message,
          variant: "destructive",
          duration: 3000,
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground mb-2 tracking-wide">
                {t.needInfo}
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {t.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.welcomeText}
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.form.name} *
                    </label>
                    <Input
                      type="text"
                      placeholder={t.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.form.email} *
                    </label>
                    <Input
                      type="email"
                      placeholder={t.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.phone} *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+39 389 143 0907"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.message} *
                  </label>
                  <Textarea
                    placeholder={t.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyConsent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacyConsent: checked as boolean })
                    }
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    {t.form.privacyConsent}{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      {t.form.privacyLink}
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-semibold"
                >
                  {t.form.send}
                </Button>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t.info.phone}</h3>
                <a
                  href={`tel:${t.info.phoneNumber}`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t.info.phoneNumber}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t.info.whatsapp}</h3>
                <a
                  href={`https://wa.me/${t.info.whatsappNumber.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {t.info.whatsappNumber}
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t.info.email}</h3>
                <a
                  href={`mailto:${t.info.emailAddress}`}
                  className="text-sm text-muted-foreground hover:text-blue-600 transition-colors break-all"
                >
                  {t.info.emailAddress}
                </a>
              </div>

              {/* Office */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t.info.office}</h3>
                <p className="text-sm text-muted-foreground">{t.info.officeAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
