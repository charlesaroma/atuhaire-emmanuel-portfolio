import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async'; // Add Helmet import
import GalleryComponent from '../components/galleryPage/Gallery'; // Renamed to avoid conflict
import ScrollToTop from '../components/ScrollToTop';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="View a collection of images and videos showcasing Atuhaire Emmanuel's work as an actor and storyteller." />
        {/* You can add more meta tags as needed */}
      </Helmet>

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
          <GalleryComponent /> 
        </motion.section>
      </motion.div>
    </>
  );
};

export default GalleryPage;