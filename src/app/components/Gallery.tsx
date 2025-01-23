'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageData {
  title: string;
  caption: string;
  imageUrl: string;
}

const imageData: ImageData[] = [
  {
    title: 'Lego Porsche 911',
    caption: 'My Lego Porsche 911 set.',
    imageUrl: 'car.jpg',
  },
  {
    title: 'City Lights',
    caption: 'A vibrant cityscape at night.',
    imageUrl: 'editing.jpg',
  },
  {
    title: 'Protogen Matrix',
    caption: 'The making of a protogen face.',
    imageUrl: 'proto.jpg',
  },
  {
    title: 'Abandoned Mine Urbex',
    caption: 'Abandoned factory.',
    imageUrl: 'mine.jpg',
  },
  {
    title: 'Mercedes 300SL',
    caption: 'A random pic I took at an event.',
    imageUrl: 'mb.jpg',
  },
  // Add more items as needed
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <div className="py-12">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        {imageData.map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(item)}
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[200px] sm:h-[300px] object-cover"
            />

            {/* Dark Tint */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-opacity" />

            {/* Title and Caption */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close modal on click outside
          >
            <motion.img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-auto max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
