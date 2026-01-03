const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8">
            A Culinary Journey
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-primary/30" />
            <div className="w-2 h-2 bg-primary rotate-45" />
            <div className="h-px w-16 bg-primary/30" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Meski Restaurant brings the bold, aromatic flavors of Ethiopia to San Francisco's 
            Lower Nob Hill, reimagined through the lens of contemporary fine dining. Our kitchen 
            honors traditional techniques—nitir kibbeh, berbere, injera—while embracing global 
            influences to create dishes that surprise and delight.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Step into our intimate, candlelit space where African art adorns the walls and 
            every plate tells a story. From our signature Tomahawk Bistec to the delicate 
            Kitfo Tartare, experience the warmth of Ethiopian hospitality paired with an 
            exceptional cocktail and wine program.
          </p>

          {/* Atmosphere Tags */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {['Intimate', 'Classy', 'Upscale', 'Dressy', 'Good for Groups'].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
