import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  /* Image Data */
  const images = [
    // Behind the Scenes
    {
      id: 5,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.49.02_ae94a6a0.jpg?updatedAt=1742921589043",
      category: "Behind the Scenes",
      description: "On-Set Cinematography Setup"
    },
    {
      id: 6,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.49.02_9c8ff216.jpg?updatedAt=1742921584332",
      category: "Behind the Scenes",
      description: "Camera Equipment Setup"
    },
    {
      id: 7,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.49.00_c558e85a.jpg?updatedAt=1742921584254",
      category: "Behind the Scenes",
      description: "Location Scouting Moment"
    },
    {
      id: 8,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.57_d22a83e1.jpg?updatedAt=1742921578548",
      category: "Behind the Scenes",
      description: "Production Team in Action"
    },
    {
      id: 9,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.57_177d50a8.jpg?updatedAt=1742921578422",
      category: "Behind the Scenes",
      description: "Technical Setup Process"
    },
    {
      id: 10,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.56_a8db490d.jpg?updatedAt=1742921578418",
      category: "Behind the Scenes",
      description: "Pre-Production Planning"
    },
    // Events
    {
      id: 11,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.49.00_a3de1f0b.jpg?updatedAt=1742921584548",
      category: "Events",
      description: "Live Event Coverage"
    },
    {
      id: 12,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.49.00_aec7d8ba.jpg?updatedAt=1742921584125",
      category: "Events",
      description: "Event Photography Session"
    },
    {
      id: 13,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.59_159356d7.jpg?updatedAt=1742921583940",
      category: "Events",
      description: "Crowd Coverage"
    },
    {
      id: 14,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.58_3111a461.jpg?updatedAt=1742921578141",
      category: "Events",
      description: "Event Atmosphere Capture"
    },
    // Press
    {
      id: 15,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.56_12d2d9f0.jpg?updatedAt=1742921578756",
      category: "Press",
      description: "Press Conference Coverage"
    },
    {
      id: 16,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.55_1bcb4b39.jpg?updatedAt=1742921578674",
      category: "Press",
      description: "Media Interview Session"
    },
    {
      id: 17,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.56_d5e0187b.jpg?updatedAt=1742921578749",
      category: "Press",
      description: "Press Event Documentation"
    },
    {
      id: 18,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.48.59_8c9be448.jpg?updatedAt=1742921584326",
      category: "Press",
      description: "Media Coverage Setup"
    },
    {
      id: 19,
      url: "https://ik.imagekit.io/ldeismm29/atuhaire/Gallery/WhatsApp%20Image%202025-03-25%20at%2019.49.00_a3de1f0b.jpg?updatedAt=1742921584548",
      category: "Press",
      description: "Press Event Highlights"
    },
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
  ];

  /* Category Filter State */
  const categories = ["All", "Behind the Scenes", "Events", "Press", "Portraits"];
  const [activeCategory, setActiveCategory] = useState("All");

  /* Filter Images Based on Category */
  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    /* Main Container */
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <div className="flex items-center justify-center mb-1">
          <div className="w-6 sm:w-8 h-[2px] bg-[var(--color-secondary-400)] mr-2"></div>
          <span className="text-[var(--color-accent-600)] text-xs md:text-sm tracking-wider">GALLERY</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[var(--color-accent-600)] mb-4 md:mb-6 leading-tight">
          VISUAL <span className="text-[var(--color-secondary-400)]">JOURNEY</span>
        </h2>
        <p className="text-[var(--color-accent-600)] text-sm md:text-base max-w-2xl mx-auto px-4">
          Explore moments captured throughout my career in entertainment and beyond.
        </p>
      </motion.div>

      {/* Category Filter Buttons */}
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
                ? "bg-[var(--color-secondary-400)] text-[var(--color-secondary-900)]"
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-900)]/70 via-[var(--color-primary-900)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <p className="text-[var(--color-accent-600)] text-xs sm:text-sm">{image.category}</p>
                    <h3 className="text-[var(--color-accent-600)] text-base sm:text-lg font-normal">{image.description}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-[var(--color-primary-900)]/90 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.url}
              alt={selectedImage.description}
              className="max-w-full max-h-[80vh] md:max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-2 md:bottom-4 left-4 right-4 text-center text-[var(--color-accent-600)]">
              <p className="text-xs md:text-sm text-[var(--color-accent-600)]">{selectedImage.category}</p>
              <h3 className="text-base md:text-xl font-normal">{selectedImage.description}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 md:-top-40 -right-20 md:-right-40 w-48 md:w-96 h-48 md:h-96 bg-[var(--color-primary)]/10 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-48 md:w-96 h-48 md:h-96 bg-[var(--color-secondary-400)]/10 rounded-full blur-2xl md:blur-3xl"></div>
      </div> */}
    </div>
  );
};

export default Gallery;
