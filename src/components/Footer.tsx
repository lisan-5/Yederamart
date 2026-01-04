import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Coffee, Star, Heart, ExternalLink, Sparkles } from "lucide-react";
import EthiopianPattern from "@/components/EthiopianPattern";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />
      
      {/* Animated tricolor top bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      
      {/* Animated background glow with Ethiopian colors */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-ethiopian-green/5 rounded-full blur-[80px] md:blur-[100px]"
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/10 blur-[80px] md:blur-[100px]"
        animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-ethiopian-red/5 rounded-full blur-[80px] md:blur-[100px]"
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-[15%] text-primary/10"
        animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        <Coffee className="w-6 h-6" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-[10%] text-ethiopian-green/10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
      >
        <Star className="w-5 h-5" />
      </motion.div>
      <motion.div 
        className="absolute top-1/2 left-[5%] text-ethiopian-red/10"
        animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 5 }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Ethiopian decorative element with animation */}
          <motion.div 
            className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-2 md:w-3 h-2 md:h-3 bg-ethiopian-green rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="h-px w-8 md:w-12 bg-ethiopian-green/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="w-4 md:w-5 h-4 md:h-5 text-primary" />
            </motion.div>
            <motion.div 
              className="h-px w-8 md:w-12 bg-ethiopian-red/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="w-2 md:w-3 h-2 md:h-3 bg-ethiopian-red rotate-45"
              animate={{ rotate: [45, -135, 45] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>

          {/* Logo with gradient and hover effect */}
          <motion.h2 
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            Yedera
          </motion.h2>
          
          <motion.p 
            className="font-serif text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ backgroundSize: "200% 100%" }}
          >
            Mart
          </motion.p>
          
          {/* Tagline with tricolor dots - stacked on mobile */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-muted-foreground mb-8 md:mb-12 text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { text: "Ethiopian Grocery", color: "text-ethiopian-green" },
              { text: "Coffee & Tea", color: "text-primary" },
              { text: "Cultural Goods", color: "text-ethiopian-red" }
            ].map((item, i) => (
              <motion.span 
                key={item.text}
                className={`${item.color} flex items-center gap-3`}
                whileHover={{ scale: 1.05 }}
              >
                {item.text}
                {i < 2 && <span className="hidden sm:block w-1 md:w-1.5 h-1 md:h-1.5 bg-primary rounded-full" />}
              </motion.span>
            ))}
          </motion.div>

          {/* Contact info grid with hover animations */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 w-full max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a 
              href="tel:+14705453118"
              className="group flex flex-col items-center gap-2 p-4 md:p-6 bg-card/50 border border-border hover:border-ethiopian-green/50 transition-all rounded-sm relative overflow-hidden"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-ethiopian-green"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Phone className="w-4 md:w-5 h-4 md:h-5 text-ethiopian-green" />
              </motion.div>
              <span className="text-foreground text-xs md:text-sm">(470) 545-3118</span>
            </motion.a>
            
            <motion.a 
              href="https://maps.google.com/?q=1525+E+Park+Place+Blvd+Stone+Mountain+GA+30087"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 md:p-6 bg-card/50 border border-border hover:border-primary/50 transition-all rounded-sm relative overflow-hidden"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                whileHover={{ y: -3 }} 
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              </motion.div>
              <span className="text-foreground text-xs md:text-sm text-center">1525 E Park Place Blvd<br />Stone Mountain, GA</span>
            </motion.a>
            
            <motion.div 
              className="group flex flex-col items-center gap-2 p-4 md:p-6 bg-card/50 border border-border hover:border-ethiopian-red/50 transition-all rounded-sm relative overflow-hidden"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-ethiopian-red"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Clock className="w-4 md:w-5 h-4 md:h-5 text-ethiopian-red" />
              </motion.div>
              <span className="text-foreground text-xs md:text-sm text-center">Open Daily<br />10:30 AM - 8:00 PM</span>
            </motion.div>
          </motion.div>

          {/* Social link with animation */}
          <motion.div 
            className="flex items-center gap-6 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href="https://www.yelp.com/biz/yedera-mart-stone-mountain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              View on Yelp
              <motion.span 
                className="w-3 md:w-4 h-px bg-primary"
                whileHover={{ width: 24 }}
              />
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>
          
          {/* Family owned badge */}
          <motion.div 
            className="flex items-center gap-2 mb-6 text-muted-foreground text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-ethiopian-red fill-ethiopian-red" />
            </motion.span>
            <span>Family owned since 2020</span>
          </motion.div>

          {/* Ethiopian decorative divider with animation */}
          <motion.div 
            className="flex items-center gap-1 md:gap-2 mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.div 
              className="w-4 md:w-8 h-px bg-ethiopian-green/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="w-1.5 md:w-2 h-1.5 md:h-2 border border-ethiopian-green/50 rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="w-8 md:w-12 h-px bg-primary/30" />
            <motion.div 
              className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary/30 rotate-45"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-8 md:w-12 h-px bg-primary/30" />
            <motion.div 
              className="w-1.5 md:w-2 h-1.5 md:h-2 border border-ethiopian-red/50 rotate-45"
              animate={{ rotate: [45, -135, 45] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div 
              className="w-4 md:w-8 h-px bg-ethiopian-red/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-[10px] md:text-xs text-muted-foreground/50 font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {currentYear} Yedera Mart. All rights reserved.
          </motion.p>
        </div>
      </div>
      
      {/* Bottom tricolor bar with animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer;
