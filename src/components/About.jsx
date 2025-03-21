import { motion } from "framer-motion";

// Fix linter warning
const MotionDiv = motion.div;
const MotionButton = motion.button;

const About = () => {
  return (
    <div className="h-screen w-full flex items-center bg-[--color-accent-dark] relative">
      <div className="w-full flex items-center justify-center mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center w-full place-content-between">
          {/* Left side image collage */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full md:w-[90%] ml-auto aspect-[4/3] max-h-[70vh]"
          >
            <div className="relative w-full h-full grid grid-cols-7 grid-rows-7 gap-2">
              {/* Main image (large, centered) */}
              <div className="col-span-5 row-span-7 col-start-2 row-start-1 relative">
                <img
                  src="https://ik.imagekit.io/ldeismm29/atuhaire/607A8463-Edit.png?updatedAt=1742478110996"
                  alt="Emmanuel Atuhaire"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-lg shadow-inner bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Animated frame */}
              <MotionDiv
                animate={{
                  rotate: [0, 1, 0, -1, 0],
                  scale: [1, 1.01, 1, 0.99, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="col-span-5 row-span-7 col-start-3 row-start-1 border-0 border-[--color-primary]/20 rounded-lg z-[-1]"
              ></MotionDiv>
            </div>
          </MotionDiv>
          {/* Right side content */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-5 max-w-xl"
          >
            <div>
              <div className="flex items-center mb-1">
                <div className="w-8 h-[2px] bg-[--color-primary] mr-2"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">
                ABOUT EMMANUEL
              </h2>
            </div>

            <p className="text-[var(--color-accent-600)] leading-relaxed text-sm md:text-base">
              Atuhaire Emmanuel Abala is an award-winning Ugandan actor with a
              powerful screen presence. His notable performances in{" "}
              <span className="text-[var(--color-secondary-400)]">
                "Enkuba"
              </span>
              ,{" "}
              <span className="text-[var(--color-secondary-400)]">
                "When You Become Me"
              </span>
              , and{" "}
              <span className="text-[var(--color-secondary-400)]">
                "Kyaddala"
              </span>{" "}
              showcase his remarkable emotional range and dedication to his
              craft.
            </p>

            <p className="text-[var(--color-accent-600)] leading-relaxed text-sm md:text-base">
              With training in both classical and contemporary acting
              techniques, Emmanuel brings authenticity and depth to every role
              he embodies, making him one of Uganda's most promising talents.
            </p>

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-transparent border border-[--color-primary] hover:bg-[--color-primary] text-white px-5 py-2 md:px-6 md:py-2 rounded-lg font-medium flex items-center mt-2 text-sm transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(123,97,255,0.1)]"
            >
              <span>DISCOVER MORE</span>
            </MotionButton>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default About;
