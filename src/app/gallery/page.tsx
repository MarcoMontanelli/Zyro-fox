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

      {/* Glow Animations in the Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Glows */}
        <motion.div
          className="absolute w-80 h-80 bg-purple-500 opacity-50 blur-3xl rounded-full -top-10 -left-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <motion.div
          className="absolute w-80 h-80 bg-blue-500 opacity-50 blur-3xl rounded-full -bottom-20 -right-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
        ></motion.div>

        {/* Small Scattered Glows */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-20 h-20 bg-green-500 opacity-40 blur-2xl rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 4 + 3, // Random duration between 3-7 seconds
              ease: 'easeInOut',
            }}
          ></motion.div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-16 w-full z-10">
        <ImageGallery />
      </div>
    </div>
  );
}
