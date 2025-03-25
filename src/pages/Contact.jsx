import { motion } from "framer-motion";
import Contact from '../components/contactPage/Contact';
import ScrollToTop from '../components/ScrollToTop';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[var(--color-primary-900)] py-8 md:py-10 lg:py-10 text-[var(--color-accent-600)] relative overflow-hidden"
    >
      <ScrollToTop />
      <motion.section
        className="section relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
    </motion.div>
  );
};

export default ContactPage;