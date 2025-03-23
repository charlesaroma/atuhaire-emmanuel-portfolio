import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      id: 1,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/607A8493-Edit.png?updatedAt=1742478038515",
      category: "Portraits",
      description: "Studio Portrait Session"
    },
    {
      id: 2,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/hero-prof.png?updatedAt=1742478117589",
      category: "Portraits",
      description: "Studio Portrait Session"
    },
    {
      id: 3,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/607A8450-Edit.png?updatedAt=1742478104194",
      category: "Portraits",
      description: "Studio Portrait Session"
    },
    {
      id: 4,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/607A8463-Edit.png",
      category: "Portraits",
      description: "Studio Portrait Session"
    },
    // Add more images here with their categories and descriptions
  ];

  const categories = ["All", "Portraits", "Behind the Scenes", "Events", "Press"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-1">
          <div className="w-8 h-[2px] bg-[--color-primary] mr-2"></div>
          <span className="text-[var(--color-accent-600)] text-sm tracking-wider">GALLERY</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-normal text-white mb-6">
          VISUAL <span className="text-[var(--color-secondary-400)]">JOURNEY</span>
        </h2>
        <p className="text-[var(--color-accent-600)] text-sm md:text-base max-w-2xl mx-auto">
          Explore moments captured throughout my career in entertainment and beyond.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
              activeCategory === category
                ? "bg-[var(--color-secondary-400)] text-white"
                : "bg-[var(--color-primary-800)]/30 text-[var(--color-accent-600)] hover:bg-[var(--color-secondary-400)]/20"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer rounded-xl bg-[var(--color-primary-800)]/30 p-4"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.description}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm">{image.category}</p>
                    <h3 className="text-white text-lg font-normal">{image.description}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[var(--color-secondary-400)] transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.url}
              alt={selectedImage.description}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <p className="text-sm text-[var(--color-accent-600)]">{selectedImage.category}</p>
              <h3 className="text-xl font-normal">{selectedImage.description}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-secondary-400)]/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Gallery;
