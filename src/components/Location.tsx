import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "5:00 PM - 11:00 PM" },
  { day: "Thursday", hours: "5:00 PM - 11:00 PM" },
  { day: "Friday", hours: "5:00 PM - 1:00 AM" },
  { day: "Saturday", hours: "5:00 PM - 1:00 AM" },
  { day: "Sunday", hours: "5:00 PM - 9:00 PM" },
];

const Location = () => {
  const today = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = dayNames[today];

  return (
    <section id="location" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-secondary overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977!2d-122.4197!3d37.7876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a1f8a71d1%3A0x1000!2s1000%20Larkin%20St%2C%20San%20Francisco%2C%20CA%2094109!5e0!3m2!1sen!2sus!4v1704000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meski Restaurant Location"
            />
            <div className="absolute inset-0 pointer-events-none border border-border" />
          </div>

          {/* Info */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Visit Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              Location & Hours
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-8 pb-8 border-b border-border">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  1000 Larkin Street<br />
                  San Francisco, CA 94109<br />
                  Lower Nob Hill
                </p>
                <a 
                  href="https://maps.google.com/?q=1000+Larkin+St+San+Francisco+CA+94109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-gold-light transition-colors mt-2 text-sm"
                >
                  Get Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 mb-8">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground mb-4">Hours</h3>
                <div className="space-y-2">
                  {hours.map((item) => (
                    <div 
                      key={item.day}
                      className={`flex justify-between py-2 ${
                        item.day === currentDay 
                          ? 'text-primary font-medium' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div id="reservations" className="pt-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <a href="https://meskisf.com" target="_blank" rel="noopener noreferrer">
                  Make a Reservation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
