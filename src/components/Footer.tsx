import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-24 bg-background overflow-hidden">
      {/* Ethiopian pattern background */}
      <div className="absolute inset-0 ethiopian-pattern opacity-30" />
      
      {/* Tricolor top bar */}
      <div className="absolute top-0 left-0 right-0 tricolor-bar" />
      
      {/* Background glow with Ethiopian colors */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-ethiopian-green/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-ethiopian-red/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Ethiopian decorative element */}
          <motion.div 
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-3 h-3 bg-ethiopian-green rotate-45" />
            <div className="h-px w-12 bg-ethiopian-green/50" />
            <Coffee className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-ethiopian-red/50" />
            <div className="w-3 h-3 bg-ethiopian-red rotate-45" />
          </motion.div>

          {/* Logo with gradient */}
          <motion.h2 
            className="font-serif text-6xl md:text-7xl text-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Yedera
          </motion.h2>
          
          <motion.p 
            className="font-serif text-3xl mb-6 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Mart
          </motion.p>
          
          {/* Tagline with tricolor dots */}
          <motion.div 
            className="flex items-center gap-3 text-muted-foreground mb-12 text-sm uppercase tracking-[0.25em] font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-ethiopian-green">Ethiopian Grocery</span>
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary">Coffee & Tea</span>
            <div className="w-1.5 h-1.5 bg-ethiopian-red rounded-full" />
            <span className="text-ethiopian-red">Cultural Goods</span>
          </motion.div>

          {/* Contact info grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12 w-full max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="tel:+14705453118"
              className="group flex flex-col items-center gap-2 p-6 bg-card/50 border border-border hover:border-ethiopian-green/50 transition-colors"
            >
              <Phone className="w-5 h-5 text-ethiopian-green group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-sm">(470) 545-3118</span>
            </a>
            
            <a 
              href="https://maps.google.com/?q=1525+E+Park+Place+Blvd+Stone+Mountain+GA+30087"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-6 bg-card/50 border border-border hover:border-primary/50 transition-colors"
            >
              <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-sm text-center">1525 E Park Place Blvd<br />Stone Mountain, GA</span>
            </a>
            
            <div className="group flex flex-col items-center gap-2 p-6 bg-card/50 border border-border hover:border-ethiopian-red/50 transition-colors">
              <Clock className="w-5 h-5 text-ethiopian-red group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-sm text-center">Open Daily<br />10:30 AM - 8:00 PM</span>
            </div>
          </motion.div>

          {/* Social link */}
          <motion.div 
            className="flex items-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="https://www.yelp.com/biz/yedera-mart-stone-mountain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest flex items-center gap-2"
            >
              View on Yelp
              <span className="w-4 h-px bg-primary" />
            </a>
          </motion.div>

          {/* Ethiopian decorative divider */}
          <motion.div 
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="w-8 h-px bg-ethiopian-green/30" />
            <div className="w-2 h-2 border border-ethiopian-green/50 rotate-45" />
            <div className="w-12 h-px bg-primary/30" />
            <div className="w-2 h-2 bg-primary/30 rotate-45" />
            <div className="w-12 h-px bg-primary/30" />
            <div className="w-2 h-2 border border-ethiopian-red/50 rotate-45" />
            <div className="w-8 h-px bg-ethiopian-red/30" />
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-xs text-muted-foreground/50 font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {currentYear} Yedera Mart. All rights reserved. <span className="text-ethiopian-green">•</span> Family Owned <span className="text-primary">•</span> Stone Mountain, GA <span className="text-ethiopian-red">•</span>
          </motion.p>
        </div>
      </div>
      
      {/* Bottom tricolor bar */}
      <div className="absolute bottom-0 left-0 right-0 tricolor-bar" />
    </footer>
  );
};

export default Footer;
