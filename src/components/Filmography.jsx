import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Fix linter warning
const MotionDiv = motion.div;
const MotionButton = motion.button;

const projects = [
  {
    title: "When You Become Me",
    category: "Film | Drama",
    year: "2023",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Emma%201.jpeg?updatedAt=1742487333191"
  },
  {
    title: "Jimbi",
    category: "Fantasy | Horror ",
    year: "2024",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/emma2.jpeg?updatedAt=1742487768793"
  },
  {
    title: "Enkuba",
    category: "Film | Drama",
    year: "2022",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20201109.png?updatedAt=1742490687376"
  },
  {
    title: "Cross Roads",
    category: "TV Series | Drama",
    year: "2024",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20200646.png?updatedAt=1742490419828"
  },
  {
    title: "Kyaddala",
    category: "TV Series | Drama",
    year: "2023",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20200925.png?updatedAt=1742490562049"
  },
  {
    title: "Blood Ransaom",
    category: "Film | Drama",
    year: "2022",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20201411.png?updatedAt=1742490846468"
  },
  {
    title: "The Chwezi Dynasty",
    category: "Film | Drama",
    year: "2022",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/The%20Cwezi%20Dynasty.jpg?updatedAt=1742491929605"
  },
  {
    title: "Ethania",
    category: "Short-Film | Drama",
    year: "2022",
    image: "https://ik.imagekit.io/ldeismm29/atuhaire/Movie-posters/Screenshot%202025-03-20%20203007.png?updatedAt=1742491798456"
  }
]

const Filmography = () => {
  return (
    <div className="w-full  bg-[--color-accent-dark] py-20 relative overflow-hidden">      
      <div className="container mx-auto px-10 relative z-10 overflow-hidden">
        <h2 className="text-4xl font-normal text-[var(--color-accent-500)] mb-12 text-center">Featured Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer mx-auto w-full max-w-[280px]"
            >
              <div className="h-[400px] rounded-lg overflow-hidden mb-4 bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center md:text-left">{project.title}</h3>
              <p className="text-gray-300 text-center md:text-left">{project.category} • {project.year}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filmography