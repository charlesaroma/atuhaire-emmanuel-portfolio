import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useState } from 'react'

// Fix linter warning by using the motion import
const MotionDiv = motion.div;
const MotionButton = motion.button;

const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/H5oO70eVORA"; // Your showreel video URL

  return (
    <section id="showreel" className="w-full py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--color-accent-500)] mb-8 sm:mb-12 text-center">
          Showreel
        </h2>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-[800px] mx-auto"
        >
          <div className="relative aspect-video w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://img.youtube.com/vi/H5oO70eVORA/maxresdefault.jpg"
              alt="Showreel thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-primary-900)]/90 transition-colors hover:bg-[var(--color-primary-900)]/50" />
            
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 m-auto w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center shadow-xl hover:bg-[var(--color-accent-600)] transition-colors group"
            >
              <Play size={24} className="text-[var(--color-accent-600)] ml-1 group-hover:text-[var(--color-primary-900)] transition-colors" />
            </MotionButton>
          </div>
        </MotionDiv>

        <p className="text-sm md:text-base lg:text-lg text-[var(--color-accent-600)] text-center mt-6 md:mt-8 lg:mt-10 max-w-2xl mx-auto px-4">
          Experience the highlights of my cinematography work in this showreel. 
          From intimate character moments to sweeping landscapes, this collection 
          showcases my visual storytelling approach.
        </p>

        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">
            <div className="relative w-full max-w-4xl mx-4">
              <MotionButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(false)}
                className="absolute -top-10 -right-16 w-12 h-12 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center shadow-xl hover:bg-[var(--color-accent-600)] transition-colors z-[10000] group"
              >
                <X size={28} className="text-[var(--color-accent-600)] group-hover:text-[var(--color-primary-900)] transition-colors" />
              </MotionButton>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  title="Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Showreel