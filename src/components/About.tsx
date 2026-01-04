import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Coffee, Sparkles, Users, Star, ShoppingBag } from "lucide-react";
import EthiopianPattern from "@/components/EthiopianPattern";
import baskets from "@/assets/baskets.jpg";
import productTeaset from "@/assets/product-teaset.jpg";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const features = [
    { icon: Coffee, label: 'Fresh Coffee', color: 'text-ethiopian-green', bgColor: 'bg-ethiopian-green/10' },
    { icon: Heart, label: 'Family Owned', color: 'text-primary', bgColor: 'bg-primary/10' },
    { icon: Sparkles, label: 'Authentic', color: 'text-ethiopian-red', bgColor: 'bg-ethiopian-red/10' },
    { icon: Users, label: 'Community', color: 'text-primary', bgColor: 'bg-primary/10' },
  ];

  const atmosphereTags = ['Family-Owned', 'Authentic', 'Welcoming', 'Cultural', 'Community'];

  return (
    <section id="about" className="relative py-16 md:py-32 bg-card overflow-hidden">
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />
      
      {/* Decorative corner elements with tricolor animation */}
      <motion.div 
        className="absolute top-0 left-0 w-20 md:w-40 h-20 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ethiopian-green to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-ethiopian-green to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-20 md:w-40 h-20 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-ethiopian-red to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-ethiopian-red to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </motion.div>
      
      {/* Animated ambient glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial-gold opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-[10%] text-primary/10"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <Star className="w-8 h-8" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-[8%] text-ethiopian-green/10"
        animate={{ y: [0, -15, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
      >
        <ShoppingBag className="w-6 h-6" />
      </motion.div>

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Images */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-[4/5]">
              {/* Main image */}
              <motion.div 
                className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img 
                  src={baskets} 
                  alt="Ethiopian woven baskets" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red" />
              </motion.div>
              
              {/* Secondary image */}
              <motion.div 
                className="absolute bottom-0 right-0 w-2/3 h-2/3 overflow-hidden rounded-sm border-4 border-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  src={productTeaset} 
                  alt="Ethiopian handicrafts" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </motion.div>
              
              {/* Decorative element */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-sm"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-ethiopian-green/20 rounded-sm"
                animate={{ rotate: [0, -90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            {/* Section Label with tricolor dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <motion.div 
                className="w-2 h-2 bg-ethiopian-green rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-light">
                About Us
              </span>
              <motion.div 
                className="w-2 h-2 bg-ethiopian-red rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Heading with cultural styling */}
            <motion.h2 
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 md:mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A Taste of
              <br />
              <motion.span 
                className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Ethiopia
              </motion.span>
            </motion.h2>

            {/* Decorative Ethiopian-inspired divider */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-2 mb-8 md:mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="h-px w-8 md:w-16 bg-ethiopian-green/60"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "right" }}
              />
              <div className="flex items-center gap-1">
                <motion.div 
                  className="w-1.5 md:w-2 h-1.5 md:h-2 bg-ethiopian-green rotate-45"
                  animate={{ rotate: [45, 225, 45] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="w-2 md:w-3 h-2 md:h-3 border-2 border-primary rotate-45"
                  animate={{ rotate: [45, -135, 45] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div 
                  className="w-1.5 md:w-2 h-1.5 md:h-2 bg-ethiopian-red rotate-45"
                  animate={{ rotate: [45, 225, 45] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
              <motion.div 
                className="h-px w-8 md:w-16 bg-ethiopian-red/60"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>

            {/* Feature icons with stagger animation */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 mb-8 md:mb-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.label}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                >
                  <motion.div 
                    className={`w-10 md:w-12 h-10 md:h-12 rounded-full ${feature.bgColor} flex items-center justify-center border border-border/50`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`w-4 md:w-5 h-4 md:h-5 ${feature.color}`} />
                  </motion.div>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description with highlighted words */}
            <motion.p 
              className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 font-light px-2 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Welcome to Yedera Mart, your <motion.span whileHover={{ color: "hsl(145, 63%, 32%)" }} className="text-ethiopian-green font-normal cursor-default">one-stop destination</motion.span> for authentic Ethiopian flavors and 
              ingredients. We source directly from Ethiopia, ensuring the <motion.span whileHover={{ color: "hsl(42, 85%, 55%)" }} className="text-primary italic cursor-default">highest quality</motion.span> spices, 
              coffee, teff flour, and traditional goods for our community.
            </motion.p>

            <motion.p 
              className="text-base md:text-xl text-muted-foreground leading-relaxed font-light px-2 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Step into our <motion.span whileHover={{ color: "hsl(var(--foreground))" }} className="text-foreground cursor-default">family-owned market</motion.span> where you&apos;ll find fresh 
              <motion.span whileHover={{ color: "hsl(0, 72%, 44%)" }} className="text-ethiopian-red italic cursor-default"> sambusas, injera, specialty drinks</motion.span>, and a warm coffee counter 
              serving traditional Ethiopian brews.
            </motion.p>

            {/* Atmosphere Tags with cultural styling */}
            <motion.div 
              className="mt-10 md:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {atmosphereTags.map((tag, index) => (
                <motion.span 
                  key={tag}
                  className="group relative px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all duration-500 cursor-default overflow-hidden rounded-sm"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.08 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="relative z-10">{tag}</span>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom tricolor bar with animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
};

export default About;
