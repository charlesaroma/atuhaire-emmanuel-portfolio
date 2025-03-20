import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const Showreel = () => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto py-10 px-10">
      <h2 className="text-4xl font-normal text-[var(--color-accent-500)] mb-12 text-center">Showreel</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative aspect-video h-[60vh] rounded overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg"
          alt="Showreel thumbnail"
          className="w-full f-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute inset-0 m-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center"
        >
          <Play size={32} className="text-white ml-1" />
        </motion.button>
      </motion.div>
      <p className="text-[var(--color-secondary-600)] text-center mt-8 max-w-2xl mx-auto">
        Experience the highlights of my cinematography work in this showreel. 
        From intimate character moments to sweeping landscapes, this collection 
        showcases my visual storytelling approach.
      </p>
    </div>
  )
}

export default Showreel