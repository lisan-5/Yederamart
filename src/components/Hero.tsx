import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up opacity-0 stagger-1">
            Ethiopian Fusion • Cocktail Bar • Wine Bar
          </p>

          {/* Logo/Name */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-6 animate-fade-up opacity-0 stagger-2">
            Meski
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-xl md:text-2xl text-cream/80 italic mb-8 animate-fade-up opacity-0 stagger-3">
            Where East African Tradition Meets Modern Elegance
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-10 animate-fade-up opacity-0 stagger-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < 4 ? 'fill-primary text-primary' : 'fill-primary/40 text-primary/40'}`} 
                />
              ))}
            </div>
            <span className="text-muted-foreground ml-2">4.3 • 129 Reviews</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-5">
            <Button variant="hero" size="xl" asChild>
              <a href="#reservations">Reserve a Table</a>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <a href="#menu">View Menu</a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lower Nob Hill, San Francisco</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Wed-Sun from 5PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>meskisf.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
