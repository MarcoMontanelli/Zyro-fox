'use client';

import { motion } from 'framer-motion';

export default function Resources() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] text-center"
      >
        Work in Progress
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 text-center max-w-2xl leading-relaxed px-4"
        style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        }}
      >
        This page is under construction. Once completed, you’ll find a treasure trove of resources, including:
      </motion.p>

      {/* Features */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        className="mt-6 space-y-4 text-base sm:text-lg md:text-xl text-nebula-pink text-center list-none"
      >
        <li className="flex items-center justify-center gap-2">
          <span className="text-star-yellow text-xl sm:text-2xl">💻</span> Code Snippets
        </li>
        <li className="flex items-center justify-center gap-2">
          <span className="text-star-yellow text-xl sm:text-2xl">📚</span> Guides & Tutorials
        </li>
        <li className="flex items-center justify-center gap-2">
          <span className="text-star-yellow text-xl sm:text-2xl">🎥</span> Videos
        </li>
        <li className="flex items-center justify-center gap-2">
          <span className="text-star-yellow text-xl sm:text-2xl">📄</span> Downloadable PDFs
        </li>
        <li className="flex items-center justify-center gap-2">
          <span className="text-star-yellow text-xl sm:text-2xl">🖼️</span> Images & More
        </li>
      </motion.ul>

      
    </div>
  );
}
