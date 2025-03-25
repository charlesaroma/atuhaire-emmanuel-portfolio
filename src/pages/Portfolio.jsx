import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async'; // Add Helmet import
import PortfolioHero from "../components/portfolioPage/PortfolioHero";
import PortfolioBio from "../components/portfolioPage/PortfolioBio";
import ScrollToTop from "../components/ScrollToTop";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Explore Atuhaire Emmanuel's portfolio showcasing his acting roles, storytelling performances, and voice acting projects." />
        {/* You can add more meta tags as needed, e.g., keywords */}
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[var(--color-primary-900)] text-white relative overflow-hidden"
      >
        <ScrollToTop />
        <section className="section pt-8">
          <PortfolioHero />
        </section>
        <motion.section
          className="section relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PortfolioBio />
        </motion.section>
      </motion.div>
    </>
  );
};

export default Portfolio;