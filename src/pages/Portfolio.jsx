import { motion } from "framer-motion";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioProjects from "../components/PortfolioProjects";
import PortfolioBio from "../components/PortfolioBio";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[var(--color-primary-900)] text-white relative overflow-hidden"
    >
      <section className="section">
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
      <motion.section
        className="section relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <PortfolioProjects />
      </motion.section>
    </motion.div>
  );
};

export default Portfolio;
