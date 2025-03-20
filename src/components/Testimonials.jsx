import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Alex Martinez",
    role: "Film Director",
    content: "Working with Emmanuel was an absolute pleasure. His attention to detail and creative vision brought our project to life in ways we never imagined.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Sarah Johnson",
    role: "Producer",
    content: "Emmanuel's ability to capture emotion through his lens is remarkable. He consistently delivers footage that exceeds expectations and tells powerful stories.",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
  },
  {
    name: "Mark Thompson",
    role: "Documentary Filmmaker",
    content: "I've worked with many cinematographers, but Emmanuel stands out with his unique eye and technical expertise. He's my go-to collaborator for important projects.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  }
]

const Testimonials = () => {
  return (
    <div className="container mx-auto px-10 py-10">
      <h2 className="text-4xl font-bold text-text mb-12 text-center">What People Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-accent/50 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-text">{testimonial.name}</h3>
                <p className="text-text/70 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-text/80 italic">{testimonial.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials