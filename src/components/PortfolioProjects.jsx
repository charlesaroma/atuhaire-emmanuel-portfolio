import React from 'react';
import { motion } from 'framer-motion';
import ProjectList from './ProjectList';
import ProjectDisplay from './ProjectDisplay';

const PortfolioProjects = () => {
  const projects = [
    {
      id: '001',
      name: 'When You Become Me',
      type: 'Film | Drama',
      year: '2023',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Emma%201.jpeg?updatedAt=1742487333191'
    },
    {
      id: '002',
      name: 'Jimbi',
      type: 'Fantasy | Horror',
      year: '2024',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/emma2.jpeg?updatedAt=1742487768793'
    },
    {
      id: '003',
      name: 'Enkuba',
      type: 'Film | Drama',
      year: '2022',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20201109.png?updatedAt=1742490687376'
    },
    {
      id: '004',
      name: 'Cross Roads',
      type: 'TV Series | Drama',
      year: '2024',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20200646.png?updatedAt=1742490419828'
    },
    {
      id: '005',
      name: 'Kyaddala',
      type: 'TV Series | Drama',
      year: '2023',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20200925.png?updatedAt=1742490562049'
    },
    {
      id: '006',
      name: 'Blood Ransaom',
      type: 'Film | Drama',
      year: '2022',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20201411.png?updatedAt=1742490846468'
    },
    {
      id: '007',
      name: 'The Chwezi Dynasty',
      type: 'Film | Drama',
      year: '2022',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/The%20Cwezi%20Dynasty.jpg?updatedAt=1742491929605'
    },
    {
      id: '008',
      name: 'Ethania',
      type: 'Short-Film | Drama',
      year: '2022',
      image: 'https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20203007.png?updatedAt=1742491798456'
    }
  ];

  const [selectedProject, setSelectedProject] = React.useState(projects[0]);

  return (
    <>
      {/* Background text */}
      <div className="absolute pt-20 top-4 right-4 text-xs tracking-widest opacity-50">
        ACTOR'S VERY OWN
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ProjectList 
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
          <ProjectDisplay selectedProject={selectedProject} />
        </div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="group flex items-center space-x-2 mx-auto">
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
              ↓
            </span>
            <span className="text-sm tracking-widest">SAY 'I GOT' TO CONTINUE</span>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default PortfolioProjects; 