import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import productCoffee from "@/assets/product-coffee.jpg";
import productSpices from "@/assets/product-spices.jpg";
import productInjera from "@/assets/product-injera.jpg";
import productSambusa from "@/assets/product-sambusa.jpg";
import productTeaset from "@/assets/product-teaset.jpg";

const products = [
  {
    name: "Ethiopian Coffee",
    description: "Fresh roasted coffee beans, traditional jebena pots, and brewing supplies",
    image: productCoffee,
    category: "Coffee Counter",
  },
  {
    name: "Berbere & Spices",
    description: "Authentic spice blends, mitmita, turmeric, and aromatic seasonings",
    image: productSpices,
    category: "Spices",
  },
  {
    name: "Ethiopian Spice Collection",
    description: "Complete selection of traditional spices sourced directly from Ethiopia",
    image: productSpices,
    category: "Featured",
    featured: true,
  },
  {
    name: "Fresh Injera",
    description: "Traditional teff flatbread made fresh, along with teff flour for home cooking",
    image: productInjera,
    category: "Fresh Food",
  },
  {
    name: "Fresh Sambusas",
    description: "Handmade savory pastries filled with seasoned meat or vegetables",
    image: productSambusa,
    category: "Fresh Food",
  },
  {
    name: "Tea Sets & Handicrafts",
    description: "Beautiful traditional tea sets, incense holders, and Ethiopian jewelry",
    image: productTeaset,
    category: "Gifts",
  },
];

const Menu = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="relative py-32 bg-background overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 grain" />
      
      {/* Ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-burgundy/5 rounded-full blur-[120px]" />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="text-primary uppercase tracking-[0.4em] text-xs font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.span>
          
          <motion.h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-6 mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="italic text-primary">Products</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From authentic spices to fresh foods and cultural treasures, 
            discover the finest Ethiopian products sourced directly from home.
          </motion.p>
        </div>

        {/* Featured Product - Large */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div 
            className="relative group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[21/9] relative overflow-hidden">
              <motion.img 
                src={productSpices} 
                alt="Ethiopian Spice Collection"
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === -1 ? 1.05 : 1 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
              
              {/* Decorative corners */}
              <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-primary/50 transition-all duration-500 group-hover:w-20 group-hover:h-20" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-primary/50 transition-all duration-500 group-hover:w-20 group-hover:h-20" />
            </div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-2xl">
                <motion.span 
                  className="inline-block px-4 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Featured Collection
                </motion.span>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
                  Authentic Ethiopian Spices
                </h3>
                <p className="text-muted-foreground text-lg mb-4 font-light">
                  Berbere, mitmita, korerima, and more — sourced directly from Ethiopia for the most authentic flavors
                </p>
                <span className="text-primary font-serif text-xl">Explore Our Selection</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(d => !d.featured).map((product, index) => (
            <motion.div 
              key={product.name}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Category badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary bg-background/80 px-3 py-1 backdrop-blur-sm">
                    {product.category}
                  </span>
                </motion.div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <motion.p 
                      className="text-muted-foreground text-sm font-light line-clamp-2"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                    >
                      {product.description}
                    </motion.p>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-primary pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a 
            href="#location" 
            className="group inline-flex items-center gap-3 text-primary hover:text-gold-light transition-colors uppercase tracking-[0.2em] text-sm font-light"
          >
            <span className="h-px w-8 bg-primary/50 group-hover:w-12 transition-all duration-300" />
            Visit Us Today
            <span className="h-px w-8 bg-primary/50 group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
