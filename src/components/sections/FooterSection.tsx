import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-foreground mb-4">
              Cre8iveloop
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming ideas into impactful visuals since 2021. We deliver strategic design 
              and visual branding solutions that empower businesses and campaigns.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-border hover:border-accent">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-border hover:border-accent">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-border hover:border-accent">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-border hover:border-accent">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("hero")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: Cre8iveloop@gmail.com</p>
              <p>Phone: 9600861242</p>
              <p>www.cre8iveloop.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2021–2025 Cre8iveloop. All Rights Reserved.
          </p>
          
            <Button 
              onClick={scrollToTop}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-accent hover:shadow-glow-accent transition-all duration-300"
            >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};