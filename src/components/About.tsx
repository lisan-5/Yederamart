import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Coffee, Sparkles } from "lucide-react";
import EthiopianPattern from "@/components/EthiopianPattern";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const features = [
    { icon: Coffee, label: 'Fresh Coffee', color: 'text-ethiopian-green' },
    { icon: Heart, label: 'Family Owned', color: 'text-primary' },
    { icon: Sparkles, label: 'Authentic', color: 'text-ethiopian-red' },
  ];

  const atmosphereTags = ['Family-Owned', 'Authentic', 'Welcoming', 'Cultural', 'Community'];

  return (
    <section id="about" className="relative py-16 md:py-32 bg-card overflow-hidden">
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />
      
      {/* Decorative corner elements with tricolor */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-20 md:h-40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ethiopian-green to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-ethiopian-green to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-20 md:w-40 h-20 md:h-40">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-ethiopian-red to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-ethiopian-red to-transparent" />
      </div>
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial-gold opacity-20 blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label with tricolor dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6 flex items-center justify-center gap-3"
          >
            <div className="w-2 h-2 bg-ethiopian-green rounded-full" />
            <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-light">
              About Us
            </span>
            <div className="w-2 h-2 bg-ethiopian-red rounded-full" />
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
            <span className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent">
              Ethiopia
            </span>
          </motion.h2>

          {/* Decorative Ethiopian-inspired divider */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-8 md:mb-12"
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
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-ethiopian-green rotate-45" />
              <div className="w-2 md:w-3 h-2 md:h-3 border-2 border-primary rotate-45" />
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-ethiopian-red rotate-45" />
            </div>
            <motion.div 
              className="h-px w-8 md:w-16 bg-ethiopian-red/60"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Feature icons */}
          <motion.div 
            className="flex items-center justify-center gap-6 md:gap-12 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-secondary/50 flex items-center justify-center border border-border">
                  <feature.icon className={`w-4 md:w-5 h-4 md:h-5 ${feature.color}`} />
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 font-light px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Welcome to Yedera Mart, your <span className="text-ethiopian-green font-normal">one-stop destination</span> for authentic Ethiopian flavors and 
            ingredients. We source directly from Ethiopia, ensuring the <span className="text-primary italic">highest quality</span> spices, 
            coffee, teff flour, and traditional goods for our community.
          </motion.p>

          <motion.p 
            className="text-base md:text-xl text-muted-foreground leading-relaxed font-light px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Step into our <span className="text-foreground">family-owned market</span> where you&apos;ll find fresh 
            <span className="text-ethiopian-red italic"> sambusas, injera, specialty drinks</span>, and a warm coffee counter 
            serving traditional Ethiopian brews.
          </motion.p>

          {/* Atmosphere Tags with cultural styling */}
          <motion.div 
            className="mt-10 md:mt-16 flex flex-wrap items-center justify-center gap-2 md:gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {atmosphereTags.map((tag, index) => (
              <motion.span 
                key={tag}
                className="group relative px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all duration-500 cursor-default overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative z-10">{tag}</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Bottom tricolor bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red" />
    </section>
  );
};

export default About;
