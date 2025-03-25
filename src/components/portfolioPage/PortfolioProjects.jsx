import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Music, Book, Heart, Award, Mic } from 'lucide-react';

const PortfolioProjects = () => {
  const lifeAspects = [
    {
      id: 'acting',
      title: 'Acting Journey',
      icon: <Camera className="w-6 h-6" />,
      description: 'From theater to television, my journey in acting has been a transformative experience.',
      details: [
        'Method Acting Training',
        'Voice & Movement Workshops',
        'Character Development Studies',
        'On-Camera Technique'
      ],
      color: 'from-purple-500/20 to-blue-500/20'
    },
    {
      id: 'music',
      title: 'Musical Talent',
      icon: <Music className="w-6 h-6" />,
      description: 'Music has always been a powerful medium of expression in my artistic journey.',
      details: [
        'Vocal Training',
        'Piano Performance',
        'Music Theory',
        'Stage Performance'
      ],
      color: 'from-blue-500/20 to-green-500/20'
    },
    {
      id: 'education',
      title: 'Academic Pursuit',
      icon: <Book className="w-6 h-6" />,
      description: 'Balancing artistry with academics, specializing in medical records and healthcare.',
      details: [
        'Medical Records Certification',
        'Healthcare Management',
        'Data Analysis',
        'Professional Development'
      ],
      color: 'from-green-500/20 to-yellow-500/20'
    },
    {
      id: 'community',
      title: 'Community Impact',
      icon: <Heart className="w-6 h-6" />,
      description: 'Using my platform to make a positive impact in the Ugandan entertainment industry.',
      details: [
        'Youth Mentorship',
        'Arts Education',
        'Community Theater',
        'Cultural Preservation'
      ],
      color: 'from-yellow-500/20 to-red-500/20'
    },
    {
      id: 'achievements',
      title: 'Recognition',
      icon: <Award className="w-6 h-6" />,
      description: 'Honored to receive recognition for contributions to arts and entertainment.',
      details: [
        'Best Actor Awards',
        'Industry Recognition',
        'Festival Selections',
        'Critical Acclaim'
      ],
      color: 'from-red-500/20 to-purple-500/20'
    },
    {
      id: 'speaking',
      title: 'Public Speaking',
      icon: <Mic className="w-6 h-6" />,
      description: 'Sharing insights and experiences through speaking engagements and workshops.',
      details: [
        'Industry Panels',
        'Workshop Facilitation',
        'Motivational Speaking',
        'Arts Advocacy'
      ],
      color: 'from-purple-500/20 to-blue-500/20'
    }
  ];

  return (
    <div className="min-h-screen w-full py-20 relative overflow-hidden bg-[var(--color-primary-900)]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[var(--color-secondary-400)]/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Beyond the <span className="text-[var(--color-secondary-400)]">Spotlight</span>
          </h2>
          <p className="text-[var(--color-accent-600)] text-sm md:text-base max-w-2xl mx-auto">
            Discover the many facets of my journey in arts, education, and community impact.
          </p>
        </motion.div>

        {/* Life Aspects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {lifeAspects.map((aspect, index) => (
            <motion.div
              key={aspect.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${aspect.color} rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              <div className="relative bg-[var(--color-primary-800)]/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[var(--color-secondary-400)]/10 rounded-lg text-[var(--color-secondary-400)]">
                    {aspect.icon}
                  </div>
                  <h3 className="text-xl text-white font-normal">{aspect.title}</h3>
                </div>
                <p className="text-[var(--color-accent-600)] text-sm mb-6">
                  {aspect.description}
                </p>
                <ul className="space-y-2">
                  {aspect.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-[var(--color-accent-600)] text-sm flex items-center gap-2 group-hover:text-[var(--color-secondary-400)] transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary-400)]"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioProjects; 