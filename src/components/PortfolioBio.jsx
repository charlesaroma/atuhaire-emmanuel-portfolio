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

  return (
    <div className="w-full py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[--color-secondary-400] mb-6 text-center"
        >
          A Multifaceted Ugandan Talent
        </motion.h2>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[--color-secondary-300] text-lg max-w-3xl mx-auto text-center mb-16"
        >
          Atuhaire Emmanuel is a highly acclaimed Ugandan artist, renowned for his exceptional 
          performances in film, music, and theatre. His dedication, passion, and creative genius 
          have solidified his position as a leading talent in Uganda's entertainment industry.
        </motion.p>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[--color-accent-dark]/30 backdrop-blur-sm rounded-lg p-6 group hover:bg-[--color-accent-dark]/40 transition-all duration-300"
            >
              <div className="text-[--color-secondary-400] mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-[--color-secondary-50] mb-4">
                {achievement.title}
              </h3>
              <ul className="space-y-2">
                {achievement.highlights.map((highlight, i) => (
                  <li 
                    key={i}
                    className="text-[--color-secondary-300] text-sm flex items-start gap-2"
                  >
                    <span className="text-[--color-secondary-400] mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-[--color-secondary-300] text-lg italic">
            "A medical scholar with a certificate in medical records and a talented musician, 
            Atuhaire's unique blend of artistic and academic pursuits has equipped him with 
            a distinct perspective and creative approach."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioBio; 