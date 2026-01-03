import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h2 className="font-serif text-4xl text-foreground mb-4">Meski</h2>
          
          {/* Tagline */}
          <p className="text-muted-foreground mb-8">
            Ethiopian Fusion • Cocktail Bar • Wine Bar
          </p>

          {/* Social */}
          <div className="flex items-center gap-6 mb-8">
            <a 
              href="https://www.instagram.com/meskisf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.yelp.com/biz/meski-restaurant-san-francisco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest"
            >
              Yelp
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <span>1000 Larkin St, San Francisco, CA 94109</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="https://meskisf.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              meskisf.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} Meski Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
