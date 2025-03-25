import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async'; // Add Helmet import
import ContactComponent from '../components/contactPage/Contact'; // Renamed to avoid conflict
import ScrollToTop from '../components/ScrollToTop';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Get in touch with Atuhaire Emmanuel for inquiries about acting roles, storytelling engagements, or voice over work." />
        {/* You can add more meta tags as needed */}
      </Helmet>

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
          <ContactComponent />
        </motion.section>
      </motion.div>
    </>
  );
};

export default ContactPage;