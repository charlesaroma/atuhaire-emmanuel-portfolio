import React from 'react';
import { motion } from 'framer-motion';

const PortfolioBio = () => {
  const achievements = [
    {
      icon: (
        <div className="relative w-16 h-16 mb-6">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[var(--color-secondary-400)]/20 rounded-full blur-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.svg 
              className="w-10 h-10 text-[var(--color-secondary-400)]" 
              viewBox="0 0 24 24" 
              fill="none"
              whileHover={{ scale: 1.1 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                fill="currentColor"
              />
            </motion.svg>
          </div>
        </div>
      ),
      title: "Acting Career",
      highlights: [
        "Kenneth Kalema in Kyaddala Season 2",
        "Cedric in Sanyu",
        "McKenzie in Crossroads (Pearl Magic Prime)",
      ]
    },
    {
      icon: (
        <div className="relative w-16 h-16 mb-6">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary-400)]/20 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-[var(--color-secondary-400)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8C14.2091 8 16 6.20914 16 4C16 1.79086 14.2091 0 12 0C9.79086 0 8 1.79086 8 4C8 6.20914 9.79086 8 12 8Z" fill="currentColor"/>
              <motion.circle
                cx="12"
                cy="4"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
                fill="none"
              />
            </svg>
          </div>
        </div>
      ),
      title: "Theatre",
      highlights: [
        "Viscount Raoul de Chagny in The Phantom of the Opera",
        "Various theatrical productions",
      ]
    },
    {
      icon: (
        <div className="relative w-16 h-16 mb-6">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[var(--color-secondary-400)]/20 rounded-full blur-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.svg 
              className="w-10 h-10 text-[var(--color-secondary-400)]" 
              viewBox="0 0 24 24" 
              fill="none"
              whileHover={{ scale: 1.1 }}
            >
              <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
              <motion.path
                d="M8 21H16M12 15V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.svg>
          </div>
        </div>
      ),
      title: "Awards & Nominations",
      highlights: [
        "Best Lead Male Character Nomination - Ikon Awards",
        "UFF Regional Competitions Nomination",
        "Best Actor Award - Jimbi (UFF Regional Competition)",
      ]
    },
    {
      icon: (
        <div className="relative w-16 h-16 mb-6">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 via-[var(--color-secondary-400)]/20 to-transparent rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.svg 
              className="w-10 h-10 text-[var(--color-secondary-400)]" 
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.1 }}
            >
              <motion.path
                d="M9 18V5L21 3V16M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.svg>
          </div>
        </div>
      ),
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
    <div className="min-h-screen w-full py-20 relative overflow-hidden bg-[var(--color-primary-900)]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-secondary-400)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex items-center mb-1">
          <div className="w-8 h-[2px] bg-[--color-primary] mr-2"></div>
          <span className="text-[var(--color-accent-600)] text-sm tracking-wider">BIO</span>
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