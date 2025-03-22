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
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Text */}
      <motion.h1
        className="absolute inset-0 flex items-center justify-center text-[15vw] font-bold text-white/10 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ATUHAIRE
      </motion.h1>

      {/* Morphing Images */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-[500px] h-max"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Emmanuel Atuhaire"
              className="w-full h-full object-contain relative z-10"
            />
            {/* Gradient overlay - matching Hero.jsx */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-900)] z-20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-10 bg-white/20"></div>
          <span className="text-xs tracking-widest opacity-50">SCROLL</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioHero;
