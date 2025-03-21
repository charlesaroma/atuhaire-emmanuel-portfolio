import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

// Fix linter warning by using the motion import
const MotionDiv = motion.div;
const MotionButton = motion.button;

const Showreel = () => {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--color-accent-500)] mb-8 sm:mb-12 text-center">
          Showreel
        </h2>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-[1200px] mx-auto"
        >
          <div className="relative aspect-video w-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg"
              alt="Showreel thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors hover:bg-black/50" />
            
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center shadow-xl hover:bg-[var(--color-accent-600)] transition-colors"
            >
              <Play size={24} className="text-white ml-1" />
            </MotionButton>
          </div>
        </MotionDiv>

        <p className="text-sm sm:text-base lg:text-lg text-[var(--color-secondary-600)] text-center mt-6 sm:mt-8 lg:mt-10 max-w-2xl mx-auto px-4">
          Experience the highlights of my cinematography work in this showreel. 
          From intimate character moments to sweeping landscapes, this collection 
          showcases my visual storytelling approach.
        </p>
      </div>
    </section>
  )
}

export default Showreel