import React from 'react';
import { motion } from 'framer-motion';
import { Award, Film, Music, Theater } from 'lucide-react';

const PortfolioBio = () => {
  const achievements = [
    {
      icon: <Film size={24} />,
      title: "Acting Career",
      highlights: [
        "Kenneth Kalema in Kyaddala Season 2",
        "Cedric in Sanyu",
        "McKenzie in Crossroads (Pearl Magic Prime)",
      ]
    },
    {
      icon: <Theater size={24} />,
      title: "Theatre",
      highlights: [
        "Viscount Raoul de Chagny in The Phantom of the Opera",
        "Various theatrical productions",
      ]
    },
    {
      icon: <Award size={24} />,
      title: "Awards & Nominations",
      highlights: [
        "Best Lead Male Character Nomination - Ikon Awards",
        "UFF Regional Competitions Nomination",
        "Best Actor Award - Jimbi (UFF Regional Competition)",
      ]
    },
    {
      icon: <Music size={24} />,
      title: "Additional Talents",
      highlights: [
        "Accomplished Musician",
        "Medical Records Scholar",
        "Versatile Performer",
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen w-full py-20 relative overflow-hidden bg-[var(--color-primary-900)]/10">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-secondary-400)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex items-center mb-1">
          <div className="w-8 h-[2px] bg-[--color-primary] mr-2"></div>
          <span className="text-[var(--color-accent-600)] text-sm tracking-wider">PORTFOLIO</span>
        </div>

        {/* Main Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-normal text-white mb-12 leading-tight"
        >
          EMMANUEL <br />
          <span className="text-[var(--color-secondary-400)]">ATUHAIRE</span>
        </motion.h2>

        {/* Introduction with Gradient Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--color-accent-600)] text-sm md:text-base leading-relaxed max-w-2xl mb-20"
        >
          A commanding presence in Ugandan entertainment, delivering powerful performances 
          that captivate audiences and push creative boundaries.
        </motion.p>

        {/* Achievement Cards with Enhanced Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-[var(--color-primary-800)]/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="text-[var(--color-secondary-400)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-normal text-white mb-6">
                  {achievement.title}
                </h3>
                <ul className="space-y-3">
                  {achievement.highlights.map((highlight, i) => (
                    <li 
                      key={i}
                      className="text-[var(--color-accent-600)] text-sm flex items-start gap-2 group-hover:text-[var(--color-secondary-400)] transition-colors duration-300"
                    >
                      <span className="text-[var(--color-secondary-400)]">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section with Stylized Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute left-0 top-0 text-[120px] leading-none text-[var(--color-secondary-400)]/10 font-bold">"</div>
          <p className="text-[var(--color-accent-600)] text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto pl-12 pr-12">
            A medical scholar with a certificate in medical records and a talented musician, 
            Atuhaire's unique blend of artistic and academic pursuits has equipped him with 
            a distinct perspective and creative approach.
          </p>
          <div className="absolute right-0 bottom-0 text-[120px] leading-none text-[var(--color-secondary-400)]/10 font-bold">"</div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioBio; 