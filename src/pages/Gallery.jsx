import { motion } from "framer-motion";
import Gallery from '../components/galleryPage/Gallery';
import ScrollToTop from '../components/ScrollToTop';

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[var(--color-primary-900)] py-8 md:py-10 lg:py-10 text-white relative overflow-hidden"
    >
      <ScrollToTop />
      <motion.section
        className="section relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Gallery />
      </motion.section>
    </motion.div>
  );
};

export default GalleryPage;