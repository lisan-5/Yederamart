import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Leaf,
  Coffee,
  UtensilsCrossed,
  Gift,
  ShoppingBag,
  Flame,
} from "lucide-react";
import Diamond from "@/components/ui/diamond";
import EthiopianPattern from "@/components/EthiopianPattern";
import productSpices from "@/assets/product-spices.jpg";
import productTeaset from "@/assets/product-teaset.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import baskets from "@/assets/baskets.jpg";

const coffeeCounterImage =
  "https://media.istockphoto.com/id/2148372061/photo/ethiopian-coffee-ceremony-with-aromatic-frankincense-debre-libanos-ethiopia.jpg?s=612x612&w=0&k=20&c=wnmtopInF4vUK8hlz2yxymR1ISHRaJUoz5M7a78eUD4=";
const ethiopianCoffeeImage =
  "https://images.unsplash.com/photo-1ic-9_xCnNQ?auto=format&fit=crop&w=1600&q=80";
const sambusaImage =
  "https://media-cdn2.greatbritishchefs.com/media/tawlpk3x/img75688.whqc_768x512q90.jpg";
const injeraImage =
  "https://hips.hearstapps.com/hmg-prod/images/lula-20201119-injera-hr-64f7722ec460e.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*";

const products = [
  {
    name: "Ethiopian Coffee",
    description:
      "Fresh roasted coffee beans, traditional jebena pots, and brewing supplies",
    image: coffeeCounterImage,
    category: "Coffee Counter",
    icon: Coffee,
    color: "text-ethiopian-green",
  },
  {
    name: "Fresh Injera",
    description:
      "Traditional teff flatbread made fresh, along with teff flour for home cooking",
    image: injeraImage,
    category: "Fresh Food",
    icon: UtensilsCrossed,
    color: "text-ethiopian-red",
  },
  {
    name: "Fresh Sambusas",
    description:
      "Handmade savory pastries filled with seasoned meat or vegetables",
    image: sambusaImage,
    category: "Fresh Food",
    icon: Flame,
    color: "text-primary",
  },
  {
    name: "Tea Sets & Handicrafts",
    description:
      "Beautiful traditional tea sets, incense holders, and Ethiopian jewelry",
    image: productTeaset,
    category: "Gifts",
    icon: Gift,
    color: "text-ethiopian-green",
  },
  {
    name: "Woven Baskets",
    description:
      "Colorful handwoven mesob baskets with intricate Ethiopian patterns",
    image: baskets,
    category: "Crafts",
    icon: Diamond,
    color: "text-primary",
  },
  {
    name: "Grocery & Snacks",
    description:
      "Specialty drinks, chips, candy, household items, and everyday essentials",
    image: storeInterior,
    category: "Grocery",
    icon: ShoppingBag,
    color: "text-ethiopian-red",
  },
];

const Menu = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="products"
      className="relative py-16 md:py-32 bg-background overflow-hidden"
    >
      {/* Ethiopian Cultural Pattern Background */}
      <EthiopianPattern variant="mixed" />

      {/* Animated ambient lights with Ethiopian colors */}
      <motion.div
        className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-ethiopian-green/5 rounded-full blur-[80px] md:blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-ethiopian-red/5 rounded-full blur-[80px] md:blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        {/* Section Header with enhanced animations */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            className="flex items-center justify-center gap-2 md:gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-4 md:w-8 h-px bg-ethiopian-green"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Leaf className="w-3 h-3 md:w-4 md:h-4 text-ethiopian-green" />
            </motion.div>
            <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-light">
              What We Offer
            </span>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Leaf className="w-3 h-3 md:w-4 md:h-4 text-ethiopian-red" />
            </motion.div>
            <motion.div
              className="w-4 md:w-8 h-px bg-ethiopian-red"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.h2
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-4 md:mt-6 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red bg-clip-text text-transparent italic">
              Products
            </span>
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

        {/* Featured Product - Large with cultural styling and parallax */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            className="relative group cursor-pointer overflow-hidden rounded-sm"
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Animated tricolor top border */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red z-20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
              <motion.img
                src={productSpices}
                alt="Ethiopian Spice Collection"
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === -1 ? 1.08 : 1 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

              {/* Animated shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />

              {/* Cultural decorative corners - hidden on mobile */}
              <motion.div
                className="hidden md:block absolute top-6 left-6 w-20 h-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-ethiopian-green"
                  animate={{ width: hoveredIndex === -1 ? "120%" : "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-full w-0.5 bg-ethiopian-green"
                  animate={{ height: hoveredIndex === -1 ? "120%" : "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.div
                className="hidden md:block absolute bottom-6 right-6 w-20 h-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div
                  className="absolute bottom-0 right-0 w-full h-0.5 bg-ethiopian-red"
                  animate={{ width: hoveredIndex === -1 ? "120%" : "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 h-full w-0.5 bg-ethiopian-red"
                  animate={{ height: hoveredIndex === -1 ? "120%" : "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end p-4 md:p-12">
              <div className="max-w-2xl">
                <motion.span
                  className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red text-primary-foreground text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] mb-2 md:mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Featured Collection
                </motion.span>
                <motion.h3
                  className="font-serif text-2xl sm:text-4xl md:text-5xl text-foreground mb-2 md:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  Authentic Ethiopian Spices
                </motion.h3>
                <p className="text-muted-foreground text-sm md:text-lg mb-2 md:mb-4 font-light line-clamp-2 md:line-clamp-none">
                  Berbere, mitmita, korerima, and more — sourced directly from
                  Ethiopia
                </p>
                <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm">
                  {["Fresh", "Authentic", "Traditional"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className={`uppercase tracking-wider ${
                        i === 0
                          ? "text-ethiopian-green"
                          : i === 1
                          ? "text-primary"
                          : "text-ethiopian-red"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid with staggered animations */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-card rounded-sm">
                {/* Animated color accent top bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ethiopian-green via-primary to-ethiopian-red z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />

                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    filter:
                      hoveredIndex === index
                        ? "brightness(1.1)"
                        : "brightness(1)",
                  }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Category badge with icon - animated */}
                <motion.div
                  className="hidden md:flex absolute top-4 left-4 items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {product.icon && (
                    <motion.div
                      className="w-6 h-6 bg-background/90 backdrop-blur-sm flex items-center justify-center rounded-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <product.icon className={`w-3 h-3 ${product.color}`} />
                    </motion.div>
                  )}
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] ${product.color} bg-background/90 px-2 py-1 backdrop-blur-sm rounded-sm`}
                  >
                    {product.category}
                  </span>
                </motion.div>

                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? [0, 1, 0] : 0,
                    scale: hoveredIndex === index ? [0.5, 1.5, 0.5] : 0.5,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Diamond className="w-8 h-8 text-primary/40" />
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: hoveredIndex === index ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-serif text-base md:text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm font-light line-clamp-2">
                      {product.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coffee Roasting Feature Section */}
        <motion.div
          className="mt-8 md:mt-16 grid md:grid-cols-2 gap-4 md:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div
            className="relative group overflow-hidden rounded-sm aspect-video md:aspect-auto"
            onMouseEnter={() => setHoveredIndex(100)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img
              src={coffeeCounterImage}
              alt="Traditional Ethiopian coffee roasting"
              className="w-full h-full object-cover"
              animate={{ scale: hoveredIndex === 100 ? 1.05 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            {/* Steam animation overlay */}
            <div className="absolute top-1/4 left-1/2 flex flex-col items-center gap-1 opacity-50">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 h-6 bg-gradient-to-t from-transparent to-cream/40 rounded-full"
                  animate={{ y: [-10, -30], opacity: [0, 0.6, 0] }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-ethiopian-green text-xs uppercase tracking-widest">
                Coffee Ceremony
              </span>
              <h4 className="font-serif text-xl md:text-2xl text-foreground mt-1">
                Fresh Roasted Daily
              </h4>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 md:p-8 bg-card/50 rounded-sm border border-border/30">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 5 }}
            >
              <Coffee className="w-5 h-5 text-primary" />
              <span className="text-primary uppercase tracking-widest text-xs">
                Coffee Counter
              </span>
            </motion.div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Experience the <span className="text-primary italic">Aroma</span>
            </h3>
            <p className="text-muted-foreground font-light text-sm md:text-base mb-6">
              Visit our coffee counter for freshly brewed Ethiopian coffee,
              prepared in the traditional way. We also offer jebena pots, coffee
              sets, and the finest beans to take home.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Yirgacheffe", "Sidamo", "Harrar"].map((coffee, i) => (
                <motion.span
                  key={coffee}
                  className="px-3 py-1 text-xs border border-primary/30 text-primary rounded-sm"
                  whileHover={{
                    backgroundColor: "hsl(38, 85%, 52%)",
                    color: "hsl(20, 10%, 5%)",
                    scale: 1.05,
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4 + i * 0.1 }}
                >
                  {coffee}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-10 md:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.a
            href="#location"
            className="group inline-flex items-center gap-2 md:gap-4 text-primary hover:text-foreground transition-colors uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-light"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="h-px w-4 md:w-8 bg-ethiopian-green"
              whileHover={{ width: 48 }}
            />
            <span>Visit Us Today</span>
            <motion.span
              className="h-px w-4 md:w-8 bg-ethiopian-red"
              whileHover={{ width: 48 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
