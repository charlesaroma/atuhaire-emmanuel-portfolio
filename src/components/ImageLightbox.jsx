import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ImageLightbox = ({ image, onClose }) => {
  // Prevent click propagation on the image
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-[var(--color-secondary-400)] transition-colors p-2 z-50"
      >
        <X size={20} className="sm:w-6 sm:h-6" />
      </button>

      <div className="relative max-w-7xl w-full h-full flex items-center justify-center" onClick={handleImageClick}>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={image.url}
          alt={image.description}
          className="max-w-full max-h-[80vh] sm:max-h-[85vh] w-auto h-auto object-contain rounded-lg"
          onClick={handleImageClick}
        />
        
        <div className="absolute bottom-2 sm:bottom-4 left-4 right-4 text-center text-white">
          <p className="text-xs sm:text-sm text-[var(--color-accent-600)]">{image.category}</p>
          <h3 className="text-base sm:text-xl font-normal">{image.description}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageLightbox; 