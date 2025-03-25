import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioHero = () => {
  const heroImages = [
    "https://ik.imagekit.io/ldeismm29/atuhaire/607A8493-Edit.png?updatedAt=1742478038515",
    "https://ik.imagekit.io/ldeismm29/atuhaire/607A8450-Edit.png?updatedAt=1742478104194",
    "https://ik.imagekit.io/ldeismm29/atuhaire/hero-prof.png?updatedAt=1742478117589",
    "https://ik.imagekit.io/ldeismm29/atuhaire/607A8463-Edit.png?updatedAt=1742478110996"
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] w-full overflow-hidden">
      {/* Background Text */}
      <motion.h1
        className="absolute inset-0 flex items-center justify-center text-[10vw] sm:text-[12vw] md:text-[15vw] font-bold text-white/10 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ATUHAIRE
      </motion.h1>

      {/* Morphing Images*/}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-auto 
              min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[480px]
              max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[480px]
              max-w-[220px] sm:max-w-[260px] md:max-w-[390px] lg:max-w-[480px]
              aspect-[3/4]"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Emmanuel Atuhaire"
              className="w-full h-full object-contain relative z-10"
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
            />
            {/* Gradient overlay with responsive height */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-900)] z-20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator - Adjusted positioning */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-5 sm:h-6 md:h-8 lg:h-10 bg-white/20"></div>
          <span className="text-[8px] sm:text-[10px] md:text-xs tracking-widest opacity-50">SCROLL</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioHero;
