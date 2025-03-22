import React from 'react';
import { motion } from 'framer-motion';

const ProjectDisplay = ({ selectedProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Main heading */}
      <h1 className="text-[8rem] font-bold leading-none absolute -left-4 top-0 z-10">
        ATU<br />HAI<br />RE
      </h1>

      {/* Image container */}
      <div className="relative z-0 mt-20">
        <motion.img
          key={selectedProject.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={selectedProject.image}
          alt={selectedProject.name}
          className="w-full h-[600px] object-cover rounded-lg"
        />
        
        {/* Caption */}
        <motion.p
          key={selectedProject.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs opacity-50 mt-4 max-w-sm"
        >
          TV and film star Atuhaire is best known in Uganda for playing 
          wholesome but edgy roles in dramas. His local Generation, 
          and his hit series like "{selectedProject.name}" and more.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectDisplay; 