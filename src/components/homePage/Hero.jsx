import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Fix linter warning by using the motion import
const MotionDiv = motion.div;

const Hero = () => {
  const navigate = useNavigate();
  const roles = ["Actor", "Storyteller", "Performer", "Writer", "Voice Artist"];
  const [currentRole, setCurrentRole] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://ik.imagekit.io/ldeismm29/atuhaire/607A8493-Edit.png?updatedAt=1742478038515",
    "https://ik.imagekit.io/ldeismm29/atuhaire/607A8450-Edit.png?updatedAt=1742478104194",
    "https://ik.imagekit.io/ldeismm29/atuhaire/hero-prof.png?updatedAt=1742478117589",
    "https://ik.imagekit.io/ldeismm29/atuhaire/607A8463-Edit.png?updatedAt=1742478110996"
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => {
      clearInterval(roleInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const scrollToShowreel = () => {
    const showreelSection = document.getElementById('showreel');
    if (showreelSection) {
      showreelSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center relative overflow-hidden pt-1.5 md:pt-10 lg:pt-20"
    >
      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
          {/* ===== TEXT CONTENT ===== */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto w-full"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light text-[var(--color-accent-500)] mb-4 sm:mb-6">
              Emmanuel Atuhaire
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 text-[var(--color-secondary-300)] h-8">
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </MotionDiv>
              </AnimatePresence>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--color-secondary-600)] mb-6 sm:mb-8 max-w-xl lg:max-w-2xl">
              Through every character I embody, I seek to reveal the depth of
              human experience. My craft is about authenticity.
            </p>

            {/* ===== CALL TO ACTION BUTTONS ===== */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToShowreel}
                className="bg-transparent cursor-pointer border-2 border-[var(--color-accent-500)] text-[var(--color-accent-500)] py-2  px-4 md:px-8 md:py-3 rounded-lg text-base sm:text-lg font-medium flex items-center w-auto justify-center"
              >
                Watch Reel <Play size={18} className="ml-2" />
              </MotionDiv>
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="text-[var(--color-accent-600)] cursor-pointer px-4 py-2 sm:px-6 md:px-8 md:py-3 rounded-lg text-base sm:text-lg font-normal flex items-center w-full sm:w-auto justify-center"
              >
                Contact Me 
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* ===== PROFILE IMAGE ===== */}
          <MotionDiv
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end w-full max-w-[280px] md:max-w-[340px] lg:max-w-[500px] mx-auto"
          >
            <div className="relative w-full aspect-square lg:aspect-[5/6] overflow-hidden">
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full rounded-2xl lg:rounded-none relative"
                >
                  <img
                    src={heroImages[currentImageIndex]}
                    alt="Emmanuel"
                    className="w-full h-full object-contain lg:object-cover relative z-10"
                    loading={currentImageIndex === 0 ? "eager" : "lazy"}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-900)] z-20" />
                </MotionDiv>
              </AnimatePresence>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Hero;
