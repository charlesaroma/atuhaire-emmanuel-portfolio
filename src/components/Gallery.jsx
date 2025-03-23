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
      description: "Contemplative Monochrome Portrait"
    },
    {
      id: 2,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/hero-prof.png?updatedAt=1742478117589",
      category: "Portraits",
      description: "Dramatic Studio Lighting"
    },
    {
      id: 3,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/607A8450-Edit.png?updatedAt=1742478104194",
      category: "Portraits",
      description: "Artistic Black & White Series"
    },
    {
      id: 4,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/607A8463-Edit.png",
      category: "Portraits",
      description: "Professional Headshot Collection"
    },
    // Add more images here with their categories and descriptions
  ];

  const categories = ["All", "Portraits", "Behind the Scenes", "Events", "Press"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <div className="flex items-center justify-center mb-1">
          <div className="w-6 sm:w-8 h-[2px] bg-[--color-primary] mr-2"></div>
          <span className="text-[var(--color-accent-600)] text-xs md:text-sm tracking-wider">GALLERY</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-4 md:mb-6 leading-tight">
          VISUAL <span className="text-[var(--color-secondary-400)]">JOURNEY</span>
        </h2>
        <p className="text-[var(--color-accent-600)] text-sm md:text-base max-w-2xl mx-auto px-4">
          Explore moments captured throughout my career in entertainment and beyond.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 px-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs md:text-sm transition-all duration-300 ${
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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
              className="relative group cursor-pointer rounded-lg md:rounded-xl bg-[var(--color-primary-800)]/30 p-2 md:p-4"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.description}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <p className="text-white text-xs sm:text-sm">{image.category}</p>
                    <h3 className="text-white text-base sm:text-lg font-normal">{image.description}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox - make it more responsive */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-[var(--color-secondary-400)] transition-colors p-2"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.url}
              alt={selectedImage.description}
              className="max-w-full max-h-[80vh] md:max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-2 md:bottom-4 left-4 right-4 text-center text-white">
              <p className="text-xs md:text-sm text-[var(--color-accent-600)]">{selectedImage.category}</p>
              <h3 className="text-base md:text-xl font-normal">{selectedImage.description}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements - adjust for different screen sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 md:-top-40 -right-20 md:-right-40 w-48 md:w-96 h-48 md:h-96 bg-[var(--color-primary)]/10 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-48 md:w-96 h-48 md:h-96 bg-[var(--color-secondary-400)]/10 rounded-full blur-2xl md:blur-3xl"></div>
      </div>
    </div>
  );
};

export default Gallery;
