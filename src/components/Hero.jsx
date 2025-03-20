import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { AnimatedBackground } from "animated-backgrounds";
import { useState, useEffect } from 'react';

// Fix linter warning by using the motion import
const MotionDiv = motion.div;

const Hero = () => {
  const roles = ["Actor", "Storyteller", "Performer", "Writer", "Voice Artist"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Particle animation background */}
      <div className="absolute inset-0">
        <AnimatedBackground 
          animationName="auroraBorealis"
          blendMode="soft-light"
          style={{ opacity: 0.15 }}
        />
      </div>
      
      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-6 lg:px-10 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20">
          {/* ===== TEXT CONTENT ===== */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-3xl lg:text-8xl font-light text-[var(--color-accent-500)] mb-4">
              Emmanuel Atuhaire
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium mb-6 text-[var(--color-secondary-300)] h-8">
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

            <p className="text-base lg:text-lg text-[var(--color-secondary-600)] mb-8 max-w-2xl">
              Through every character I embody, I seek to reveal the depth of
              human experience. My craft is about authenticity.
            </p>

            {/* ===== CALL TO ACTION BUTTONS ===== */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent cursor-pointer border-2 border-[var(--color-accent-500)] text-[var(--color-accent-500)] px-4 py-1 md:px-8 md:py-3 rounded-lg text-lg font-medium flex items-center"
              >
                Watch Reel <Play size={18} className="ml-2" />
              </MotionDiv>
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[var(--color-accent-600)] cursor-pointer px-4 py-1 md:px-8 md:py-3 rounded-lg text-lg font-normal flex items-center]"
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
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[600px] relative overflow-hidden">
              <MotionDiv
                className="absolute inset-0 rounded-full"
              >
                <img
                  src="https://ik.imagekit.io/ldeismm29/atuhaire/hero-prof.png?updatedAt=1742478117589"
                  alt="Emmanuel"
                  className="w-full h-full object-cover"
                />
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Hero;
