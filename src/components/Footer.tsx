import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 bg-background border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial-gold opacity-10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Decorative top element */}
          <motion.div 
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 border border-primary/50 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </motion.div>

          {/* Logo */}
          <motion.h2 
            className="font-serif text-5xl md:text-6xl text-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Yedera
          </motion.h2>
          
          <motion.p 
            className="font-serif text-2xl text-primary italic mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Mart
          </motion.p>
          
          {/* Tagline */}
          <motion.p 
            className="text-muted-foreground mb-10 text-sm uppercase tracking-[0.3em] font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ethiopian Grocery • Coffee & Tea • Cultural Goods
          </motion.p>

          {/* Contact */}
          <motion.div 
            className="flex items-center gap-8 mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="tel:+14705453118"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest">(470) 545-3118</span>
            </a>
            <div className="w-1 h-1 bg-border rounded-full" />
            <a 
              href="https://www.yelp.com/biz/yedera-mart-stone-mountain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest"
            >
              Yelp
            </a>
          </motion.div>

          {/* Address */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-light">1525 E Park Place Blvd, Stone Mountain, GA 30087</span>
            <span className="hidden md:inline text-border">|</span>
            <span className="font-light">Open Daily 10:30 AM - 8:00 PM</span>
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-xs text-muted-foreground/40 font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {currentYear} Yedera Mart. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
