'use client';

import { motion } from 'framer-motion';
import ImageGallery from '../components/Gallery';

export default function Gallery() {
  return (
    <div className="min-h-screen  text-white flex flex-col items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center mt-12 z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"
        >
          My Gallery
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          className="mt-4 text-lg text-gray-300 leading-relaxed"
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.6)',
          }}
        >
          Dive into my collection of creations! Here, you'll explore images, projects, and moments captured in time.
        </motion.p>

        {/* Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          className="mt-6 text-cosmic-blue font-bold text-base bg-gray-700 bg-opacity-50 py-2 px-4 rounded-md shadow-md"
        >
          A sneak peek of what’s coming: designs, artwork, and more!
        </motion.div>
      </div>

      

      {/* Content Section */}
      <div className="mt-16 w-full z-10">
        <ImageGallery />
      </div>
    </div>
  );
}
