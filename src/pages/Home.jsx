import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Filmography from '../components/Filmography';
import Showreel from '../components/Showreel';


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-[--color-accent-dark]"
    >
      <section className="section">
        <Hero />
      </section>
      <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <About />
      </motion.section>
      <motion.section className="section bg-[--color-accent-light]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Filmography />
      </motion.section>
      <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Showreel />
      </motion.section>
 
    </motion.div>
  );
};

export default Home;
