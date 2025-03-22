import React from 'react';
import { motion } from 'framer-motion';

const ProjectList = ({ projects, selectedProject, setSelectedProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ x: 20 }}
          className={`flex items-center space-x-4 cursor-pointer group ${
            selectedProject.id === project.id ? 'text-[--color-secondary-400]' : ''
          }`}
          onClick={() => setSelectedProject(project)}
        >
          <span className="text-sm opacity-50">{project.id}</span>
          <div>
            <h3 className="text-xl font-medium group-hover:text-[--color-secondary-400] transition-colors">
              {project.name}
            </h3>
            <p className="text-sm opacity-50">{project.type} • {project.year}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList; 