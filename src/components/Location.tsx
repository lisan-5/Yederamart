import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, ExternalLink, Phone, Navigation, Coffee, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import EthiopianPattern from "@/components/EthiopianPattern";

const hours = [
  { day: "Monday", hours: "10:30 AM - 8:00 PM", closed: false },
  { day: "Tuesday", hours: "10:30 AM - 8:00 PM", closed: false },
  { day: "Wednesday", hours: "10:30 AM - 8:00 PM", closed: false },
  { day: "Thursday", hours: "10:30 AM - 8:00 PM", closed: false },
  { day: "Friday", hours: "10:30 AM - 8:00 PM", closed: false },
  { day: "Saturday", hours: "10:30 AM - 8:00 PM", closed: false },
  { day: "Sunday", hours: "10:30 AM - 6:00 PM", closed: false },
];

const Location = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const today = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = dayNames[today];

  return (
    <section id="location" className="relative py-16 md:py-32 bg-card overflow-hidden">
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />
      
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-ethiopian opacity-30"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-[5%] text-primary/10"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <MapPin className="w-8 h-8" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 right-[8%] text-ethiopian-green/10"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      >
        <Coffee className="w-6 h-6" />
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-[3%] text-ethiopian-red/10"
        animate={{ y: [0, -25, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 15, repeat: Infinity, delay: 4 }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with cultural styling */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            className="flex items-center justify-center gap-2 md:gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-2 md:w-3 h-2 md:h-3 bg-ethiopian-green rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Navigation className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            </motion.div>
            <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-light">
              Find Us
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Navigation className="w-3 h-3 md:w-4 md:h-4 text-primary rotate-180" />
            </motion.div>
            <motion.div 
              className="w-2 md:w-3 h-2 md:h-3 bg-ethiopian-red rotate-45"
              animate={{ rotate: [45, -135, 45] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.h2 
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-4 md:mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visit <span className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent italic">Yedera</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto mt-4 font-light text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Experience the warmth of Ethiopian hospitality at our Stone Mountain location
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Map & Address */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Map with cultural frame - LIGHT THEMED */}
            <motion.div 
              className="relative aspect-square lg:aspect-[4/3] mb-6 md:mb-8 group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated tricolor frame */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red blur-sm"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="absolute inset-0 bg-card" />
              
              <div className="absolute inset-1 bg-secondary overflow-hidden rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1234567890123!2d-84.1234567!3d33.8087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1525%20E%20Park%20Place%20Blvd%2C%20Stone%20Mountain%2C%20GA%2030087!5e0!3m2!1sen!2sus!4v1704000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yedera Mart Location"
                />
              </div>
              
              {/* Location pin overlay - Ethiopian Coffee Pot (Jebena) inspired marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                <div className="relative flex flex-col items-center">
                  {/* Pulse rings */}
                  <motion.div 
                    className="absolute bottom-0 w-12 h-12 rounded-full border-2 border-primary/40"
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute bottom-0 w-8 h-8 rounded-full border-2 border-ethiopian-green/50"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  
                  {/* Cultural marker - Ethiopian cross inspired pin */}
                  <motion.div 
                    className="relative z-10"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Pin body with tricolor gradient */}
                    <div className="relative">
                      <svg width="40" height="52" viewBox="0 0 40 52" fill="none" className="drop-shadow-lg">
                        {/* Main pin shape */}
                        <path 
                          d="M20 0C8.954 0 0 8.954 0 20c0 14 20 32 20 32s20-18 20-32C40 8.954 31.046 0 20 0z" 
                          fill="url(#pinGradient)"
                        />
                        {/* Inner circle */}
                        <circle cx="20" cy="18" r="10" fill="hsl(var(--background))" />
                        {/* Ethiopian cross pattern in center */}
                        <path 
                          d="M20 11v14M13 18h14M16 14l8 8M24 14l-8 8" 
                          stroke="url(#crossGradient)" 
                          strokeWidth="1.5" 
                          strokeLinecap="round"
                        />
                        {/* Decorative dots */}
                        <circle cx="20" cy="12" r="1.5" fill="hsl(var(--ethiopian-green))" />
                        <circle cx="20" cy="24" r="1.5" fill="hsl(var(--ethiopian-red))" />
                        <circle cx="14" cy="18" r="1.5" fill="hsl(var(--primary))" />
                        <circle cx="26" cy="18" r="1.5" fill="hsl(var(--primary))" />
                        
                        <defs>
                          <linearGradient id="pinGradient" x1="0" y1="0" x2="40" y2="52">
                            <stop offset="0%" stopColor="hsl(var(--ethiopian-green))" />
                            <stop offset="50%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--ethiopian-red))" />
                          </linearGradient>
                          <linearGradient id="crossGradient" x1="13" y1="11" x2="27" y2="25">
                            <stop offset="0%" stopColor="hsl(var(--ethiopian-green))" />
                            <stop offset="50%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--ethiopian-red))" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </motion.div>
                  
                  {/* Ground shadow */}
                  <motion.div 
                    className="w-6 h-2 bg-foreground/20 rounded-full blur-sm mt-1"
                    animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.15, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="hidden md:block absolute top-2 left-2 w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-ethiopian-green" />
                <div className="absolute top-0 left-0 h-full w-0.5 bg-ethiopian-green" />
              </div>
              <div className="hidden md:block absolute bottom-2 right-2 w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-ethiopian-red" />
                <div className="absolute bottom-0 right-0 h-full w-0.5 bg-ethiopian-red" />
              </div>
            </motion.div>

            {/* Address Card with cultural styling */}
            <motion.div 
              className="relative bg-background/80 backdrop-blur-sm border border-border p-6 md:p-8 overflow-hidden rounded-sm"
              whileHover={{ y: -3, borderColor: "hsl(38, 85%, 52%, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated top bar */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 md:w-12 h-8 md:h-12 border-l-2 border-t-2 border-ethiopian-green/50" />
              <div className="absolute bottom-0 right-0 w-8 md:w-12 h-8 md:h-12 border-r-2 border-b-2 border-ethiopian-red/50" />
              
              <div className="flex items-start gap-3 md:gap-4">
                <motion.div 
                  className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-ethiopian-green/20 to-primary/20 flex items-center justify-center shrink-0 rounded-sm"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 md:mb-3">Location</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                    1525 E Park Place Blvd<br />
                    Stone Mountain, GA 30087<br />
                    <span className="text-ethiopian-green">Near Stone Mountain Park</span>
                  </p>
                  <motion.a 
                    href="https://maps.google.com/?q=1525+E+Park+Place+Blvd+Stone+Mountain+GA+30087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors mt-3 md:mt-4 text-xs md:text-sm uppercase tracking-widest group"
                    whileHover={{ x: 5 }}
                  >
                    Get Directions 
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hours & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Hours with cultural styling */}
            <motion.div 
              className="relative bg-background/80 backdrop-blur-sm border border-border p-6 md:p-8 mb-6 md:mb-8 overflow-hidden rounded-sm"
              whileHover={{ borderColor: "hsl(38, 85%, 52%, 0.3)" }}
            >
              {/* Tricolor accent */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              
              <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
                <motion.div 
                  className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-primary/20 to-ethiopian-red/20 flex items-center justify-center shrink-0 rounded-sm"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Clock className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground">Hours</h3>
                  <motion.p 
                    className="text-ethiopian-green text-xs uppercase tracking-wider flex items-center gap-1"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 bg-ethiopian-green rounded-full" />
                    Open Now
                  </motion.p>
                </div>
              </div>

              <div className="space-y-0">
                {hours.map((item, index) => (
                  <motion.div 
                    key={item.day}
                    className={`flex justify-between py-3 md:py-4 border-b border-border/50 last:border-0 text-sm md:text-base ${
                      item.day === currentDay 
                        ? 'text-primary' 
                        : item.closed 
                          ? 'text-muted-foreground/50'
                          : 'text-muted-foreground'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    whileHover={{ x: 5, color: "hsl(38, 85%, 52%)" }}
                  >
                    <span className="font-light tracking-wide flex items-center gap-2">
                      {item.day === currentDay && (
                        <motion.span 
                          className="flex items-center gap-1"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Star className="w-3 h-3 fill-primary text-primary" />
                        </motion.span>
                      )}
                      <span className="hidden sm:inline">{item.day}</span>
                      <span className="sm:hidden">{item.day.slice(0, 3)}</span>
                      {item.day === currentDay && (
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-ethiopian-green">(Today)</span>
                      )}
                    </span>
                    <span className={`font-light text-xs md:text-base ${item.closed ? 'italic' : ''}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA with Ethiopian styling */}
            <motion.div 
              className="relative overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="bg-gradient-to-br from-ethiopian-green/10 via-background to-ethiopian-red/10 border border-primary/20 p-6 md:p-10 text-center relative">
                {/* Ethiopian-inspired decorative corners */}
                <motion.div 
                  className="absolute top-3 md:top-4 left-3 md:left-4 w-6 md:w-10 h-6 md:h-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.3 }}
                >
                  <div className="absolute w-full h-0.5 bg-ethiopian-green top-0 left-0" />
                  <div className="absolute h-full w-0.5 bg-ethiopian-green top-0 left-0" />
                </motion.div>
                <motion.div 
                  className="absolute top-3 md:top-4 right-3 md:right-4 w-6 md:w-10 h-6 md:h-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  <div className="absolute w-full h-0.5 bg-primary top-0 right-0" />
                  <div className="absolute h-full w-0.5 bg-primary top-0 right-0" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-6 md:w-10 h-6 md:h-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.5 }}
                >
                  <div className="absolute w-full h-0.5 bg-primary bottom-0 left-0" />
                  <div className="absolute h-full w-0.5 bg-primary bottom-0 left-0" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-6 md:w-10 h-6 md:h-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  <div className="absolute w-full h-0.5 bg-ethiopian-red bottom-0 right-0" />
                  <div className="absolute h-full w-0.5 bg-ethiopian-red bottom-0 right-0" />
                </motion.div>
                
                <motion.h3 
                  className="font-serif text-2xl md:text-3xl text-foreground mb-3 md:mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  Come Visit Us
                </motion.h3>
                <p className="text-muted-foreground font-light mb-6 md:mb-8 text-sm md:text-base">
                  Experience authentic Ethiopian hospitality
                </p>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                    <a href="tel:+14705453118">
                      <span>Call Us Now</span>
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div 
                  className="mt-4 md:mt-6 flex items-center justify-center gap-2 text-muted-foreground text-xs md:text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-3 md:w-4 h-3 md:h-4 text-primary" />
                  <a href="tel:+14705453118" className="hover:text-primary transition-colors">
                    (470) 545-3118
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
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

export default Location;
