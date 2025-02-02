'use client';

import { motion } from 'framer-motion';
import SmartButton from './SmartButton';

export default function AboutMe() {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center pt-16 pb-4 px-6 lg:px-16 gap-12 lg:gap-24 relative z-10">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex-shrink-0 w-64 h-64 lg:w-1/2 lg:h-auto rounded-full overflow-hidden relative group"
      >
        {/* Circular Image */}
        <div className="w-full h-full aspect-square rounded-full relative">
          <img
            src="/drake.svg" // Replace with your image path
            alt="About Me"
            className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Purple Hue */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_30px_10px_rgba(138,43,226,0.8)] pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Right Side - About Me Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col justify-center text-center lg:text-left lg:flex-1 space-y-6"
      >
        {/* Title */}
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          About Me
        </motion.h2>

        {/* Biography */}
        <motion.p
  whileHover={{ scale: 1.05 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="text-lg lg:text-xl text-gray-400 leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
>
  I’m a versatile creator with a passion for combining technology and creativity. From programming and 3D printing to sewing and electronics, I enjoy exploring new tools and techniques to bring unique ideas to life. Whether it’s crafting custom designs, repairing devices, or editing captivating visuals, I thrive on projects that challenge me to learn and innovate. Let’s collaborate and create something truly special!
</motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-4"
        >
          <div className="mt-6">
              <SmartButton text="Learn More" link="/about" />
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
