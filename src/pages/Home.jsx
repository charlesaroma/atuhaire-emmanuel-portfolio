import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Hero from '../components/homePage/Hero'
import About from '../components/homePage/About'
import Filmography from '../components/homePage/Filmography'
import Showreel from '../components/homePage/Showreel'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Atuhaire Emmanuel - Home</title>
        <meta name="description" content="Welcome to the official website of Atuhaire Emmanuel. Explore his work as an actor, storyteller, and voice artist." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full min-h-screen bg-[var(--color-primary-900)]"
      >
        <ScrollToTop />
        <section className="section">
          <Hero />
        </section>
        <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <About />
        </motion.section>
        <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Filmography />
        </motion.section>
        <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Showreel />
        </motion.section>
      </motion.div>
    </>
  )
}

export default Home
