import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          Contact <span className="text-primary">CABM</span>
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm font-body text-muted-foreground">info@cabm-perbanas.org</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-body text-muted-foreground">UHW Perbanas University, Surabaya, Indonesia</span>
          </div>
        </div>

        <Button className="font-heading font-semibold text-sm px-8">Contact Us</Button>
      </div>
    </section>
  );
};

export default ContactSection;
