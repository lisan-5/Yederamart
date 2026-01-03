import { motion } from "framer-motion";

interface EthiopianPatternProps {
  variant?: "crosses" | "meskel" | "coffee" | "mixed";
  className?: string;
}

const EthiopianPattern = ({ variant = "mixed", className = "" }: EthiopianPatternProps) => {
  // Generate pattern elements based on variant
  const generateElements = () => {
    const elements = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 4 + Math.random() * 4;
      const size = 8 + Math.random() * 16;
      const rotation = Math.random() * 360;

      const type = variant === "mixed" 
        ? ["cross", "diamond", "circle", "star"][Math.floor(Math.random() * 4)]
        : variant;

      elements.push(
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.02, 0.08, 0.02],
            scale: [0.8, 1, 0.8],
            rotate: [rotation, rotation + 10, rotation]
          }}
          transition={{ 
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {type === "cross" && (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
              {/* Ethiopian Orthodox Cross simplified */}
              <path 
                d="M12 0v24M0 12h24M6 6l12 12M18 6L6 18" 
                stroke="currentColor" 
                strokeWidth="1" 
                opacity="0.6"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          )}
          {type === "diamond" && (
            <div 
              className="border border-primary/30 rotate-45"
              style={{ width: size, height: size }}
            />
          )}
          {type === "circle" && (
            <div 
              className="rounded-full border border-ethiopian-green/30"
              style={{ width: size, height: size }}
            />
          )}
          {type === "star" && (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-ethiopian-red">
              <polygon 
                points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none"
                opacity="0.4"
              />
            </svg>
          )}
        </motion.div>
      );
    }
    return elements;
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {generateElements()}
      
      {/* Subtle coffee beans scattered */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bean-${i}`}
          className="absolute"
          style={{ 
            left: `${10 + i * 12}%`, 
            top: `${20 + (i % 3) * 30}%` 
          }}
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 5, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ 
            duration: 5 + i * 0.5, 
            delay: i * 0.3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" className="text-coffee-dark">
            <ellipse cx="8" cy="10" rx="6" ry="8" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5" />
            <path d="M8 2v16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </svg>
        </motion.div>
      ))}

      {/* Injera-inspired circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`injera-${i}`}
          className="absolute rounded-full border border-primary/5"
          style={{ 
            left: `${5 + i * 18}%`, 
            top: `${40 + (i % 2) * 20}%`,
            width: 60 + i * 10,
            height: 60 + i * 10
          }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ 
            duration: 8 + i, 
            delay: i * 0.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Decorative borders inspired by traditional patterns */}
      <motion.div
        className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-ethiopian-green/10 to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-ethiopian-red/10 to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, delay: 2, repeat: Infinity }}
      />
    </div>
  );
};

export default EthiopianPattern;
