import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, Coffee, UtensilsCrossed, Gift } from "lucide-react";
import EthiopianPattern from "@/components/EthiopianPattern";
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
    icon: Coffee,
    color: "text-ethiopian-green",
  },
  {
    name: "Berbere & Spices",
    description: "Authentic spice blends, mitmita, turmeric, and aromatic seasonings",
    image: productSpices,
    category: "Spices",
    icon: Leaf,
    color: "text-primary",
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
    icon: UtensilsCrossed,
    color: "text-ethiopian-red",
  },
  {
    name: "Fresh Sambusas",
    description: "Handmade savory pastries filled with seasoned meat or vegetables",
    image: productSambusa,
    category: "Fresh Food",
    icon: UtensilsCrossed,
    color: "text-primary",
  },
  {
    name: "Tea Sets & Handicrafts",
    description: "Beautiful traditional tea sets, incense holders, and Ethiopian jewelry",
    image: productTeaset,
    category: "Gifts",
    icon: Gift,
    color: "text-ethiopian-green",
  },
];

const Menu = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="relative py-16 md:py-32 bg-background overflow-hidden">
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />
      
      {/* Ambient lights with Ethiopian colors */}
      <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-ethiopian-green/5 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-ethiopian-red/5 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            className="flex items-center justify-center gap-2 md:gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-4 md:w-8 h-px bg-ethiopian-green" />
            <Leaf className="w-3 h-3 md:w-4 md:h-4 text-ethiopian-green" />
            <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-light">
              What We Offer
            </span>
            <Leaf className="w-3 h-3 md:w-4 md:h-4 text-ethiopian-red" />
            <div className="w-4 md:w-8 h-px bg-ethiopian-red" />
          </motion.div>
          
          <motion.h2 
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-4 md:mt-6 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent italic">Products</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto font-light text-sm md:text-base px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From authentic spices to fresh foods and cultural treasures, 
            discover the finest Ethiopian products sourced directly from home.
          </motion.p>
        </div>

        {/* Featured Product - Large with cultural styling */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div 
            className="relative group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tricolor top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red z-20" />
            
            <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
              <motion.img 
                src={productSpices} 
                alt="Ethiopian Spice Collection"
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === -1 ? 1.05 : 1 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
              
              {/* Cultural decorative corners - hidden on mobile */}
              <div className="hidden md:block absolute top-6 left-6 w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-ethiopian-green transition-all duration-500 group-hover:w-24" />
                <div className="absolute top-0 left-0 h-full w-0.5 bg-ethiopian-green transition-all duration-500 group-hover:h-24" />
              </div>
              <div className="hidden md:block absolute bottom-6 right-6 w-20 h-20">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-ethiopian-red transition-all duration-500 group-hover:w-24" />
                <div className="absolute bottom-0 right-0 h-full w-0.5 bg-ethiopian-red transition-all duration-500 group-hover:h-24" />
              </div>
            </div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end p-4 md:p-12">
              <div className="max-w-2xl">
                <motion.span 
                  className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red text-primary-foreground text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] mb-2 md:mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Featured Collection
                </motion.span>
                <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-foreground mb-2 md:mb-3">
                  Authentic Ethiopian Spices
                </h3>
                <p className="text-muted-foreground text-sm md:text-lg mb-2 md:mb-4 font-light line-clamp-2 md:line-clamp-none">
                  Berbere, mitmita, korerima, and more — sourced directly from Ethiopia
                </p>
                <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm">
                  <span className="text-ethiopian-green uppercase tracking-wider">Fresh</span>
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span className="text-primary uppercase tracking-wider">Authentic</span>
                  <div className="w-1 h-1 bg-ethiopian-red rounded-full" />
                  <span className="text-ethiopian-red uppercase tracking-wider">Traditional</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
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
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-card">
                {/* Color accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Category badge with icon - hidden on mobile */}
                <motion.div 
                  className="hidden md:flex absolute top-4 left-4 items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.icon && (
                    <div className="w-6 h-6 bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <product.icon className={`w-3 h-3 ${product.color}`} />
                    </div>
                  )}
                  <span className={`text-[10px] uppercase tracking-[0.2em] ${product.color} bg-background/90 px-2 py-1 backdrop-blur-sm`}>
                    {product.category}
                  </span>
                </motion.div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <div>
                    <h3 className="font-serif text-base md:text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm font-light line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div 
          className="text-center mt-10 md:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a 
            href="#location" 
            className="group inline-flex items-center gap-2 md:gap-4 text-primary hover:text-foreground transition-colors uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-light"
          >
            <span className="h-px w-4 md:w-8 bg-ethiopian-green group-hover:w-8 md:group-hover:w-12 transition-all duration-300" />
            <span>Visit Us Today</span>
            <span className="h-px w-4 md:w-8 bg-ethiopian-red group-hover:w-8 md:group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
