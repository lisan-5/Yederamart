import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "Closed", closed: true },
  { day: "Wednesday", hours: "5:00 PM - 11:00 PM", closed: false },
  { day: "Thursday", hours: "5:00 PM - 11:00 PM", closed: false },
  { day: "Friday", hours: "5:00 PM - 1:00 AM", closed: false },
  { day: "Saturday", hours: "5:00 PM - 1:00 AM", closed: false },
  { day: "Sunday", hours: "5:00 PM - 9:00 PM", closed: false },
];

const Location = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const today = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = dayNames[today];

  return (
    <section id="location" className="relative py-32 bg-card overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 ethiopian-pattern opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-primary/5 rounded-full" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-primary/5 rotate-45" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="text-primary uppercase tracking-[0.4em] text-xs font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Find Us
          </motion.span>
          
          <motion.h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visit <span className="italic text-primary">Meski</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map & Address */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Map */}
            <div className="relative aspect-square lg:aspect-[4/3] mb-8 group">
              <div className="absolute inset-0 bg-secondary overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977!2d-122.4197!3d37.7876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a1f8a71d1%3A0x1000!2s1000%20Larkin%20St%2C%20San%20Francisco%2C%20CA%2094109!5e0!3m2!1sen!2sus!4v1704000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(85%) sepia(10%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Meski Restaurant Location"
                />
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-primary/20 pointer-events-none transition-all duration-500 group-hover:-inset-4" />
              <div className="absolute inset-0 border border-border pointer-events-none" />
              
              {/* Location pin overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10" />
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-background/50 backdrop-blur-sm border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">Location</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    1000 Larkin Street<br />
                    San Francisco, CA 94109<br />
                    <span className="text-primary">Lower Nob Hill</span>
                  </p>
                  <a 
                    href="https://maps.google.com/?q=1000+Larkin+St+San+Francisco+CA+94109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors mt-4 text-sm uppercase tracking-widest group"
                  >
                    Get Directions 
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours & Reservation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Hours */}
            <div className="bg-background/50 backdrop-blur-sm border border-border p-8 mb-8">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Hours</h3>
              </div>

              <div className="space-y-0">
                {hours.map((item, index) => (
                  <motion.div 
                    key={item.day}
                    className={`flex justify-between py-4 border-b border-border/50 last:border-0 ${
                      item.day === currentDay 
                        ? 'text-primary' 
                        : item.closed 
                          ? 'text-muted-foreground/50'
                          : 'text-muted-foreground'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                  >
                    <span className="font-light tracking-wide">
                      {item.day}
                      {item.day === currentDay && (
                        <span className="ml-2 text-xs uppercase tracking-widest">(Today)</span>
                      )}
                    </span>
                    <span className={item.closed ? 'italic' : 'font-light'}>
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reservation CTA */}
            <motion.div 
              id="reservations"
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-gradient-to-br from-primary/10 via-background to-burgundy/5 border border-primary/20 p-10 text-center relative">
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-primary/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/30" />
                
                <h3 className="font-serif text-3xl text-foreground mb-4">
                  Reserve Your Table
                </h3>
                <p className="text-muted-foreground font-light mb-8">
                  Experience the warmth of Ethiopian hospitality
                </p>
                
                <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                  <a href="https://meskisf.com" target="_blank" rel="noopener noreferrer">
                    Make Reservation
                  </a>
                </Button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4" />
                  <a href="https://meskisf.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    meskisf.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
