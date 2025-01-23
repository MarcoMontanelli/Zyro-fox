'use client';

import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaTiktok, FaEye, FaUser } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const statsData = [
  {
    platform: 'YouTube',
    stats: [
      { label: 'Views', icon: FaEye, value: 2300000 },
      { label: 'Subscribers', icon: FaUser, value: 125000 },
      { label: 'Videos', icon: FaYoutube, value: 320 },
    ],
  },
  {
    platform: 'Instagram',
    stats: [
      { label: 'Views', icon: FaEye, value: 1400000 },
      { label: 'Followers', icon: FaUser, value: 95000 },
      { label: 'Posts', icon: FaInstagram, value: 120 },
    ],
  },
  {
    platform: 'TikTok',
    stats: [
      { label: 'Views', icon: FaEye, value: 5000000 },
      { label: 'Followers', icon: FaUser, value: 300000 },
      { label: 'Videos', icon: FaTiktok, value: 450 },
    ],
  },
];

export default function AnimatedStats() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * Counting up animation hook
   * @param {number} start - The starting value.
   * @param {number} end - The ending value.
   * @param {number} duration - Duration in seconds for the count-up animation (default: 2).
   * @returns {number} The current count value.
   */
  const useCountUp = (start: number, end: number, duration: number = 2): number => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      let startTime: number | undefined;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [start, end, duration]);

    return count;
  };

  // Auto-scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % statsData.length);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-4 max-w-7xl mx-auto">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="lg:w-1/3 order-last lg:order-none"
      >
        {/* Divider with Text */}
        <div className="flex items-center w-full mb-6 lg:mb-10">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-4 text-gray-400 text-sm font-medium">Statistics</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Title */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          Engaging Stats
        </motion.h2>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-400 mt-4">
          See how my platforms perform with my approximate stats. Every view, follower, and post counts.
        </p>
      </motion.div>

      {/* Right Section - Carousel */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="lg:w-2/3 mt-10 lg:mt-0 relative overflow-hidden min-h-[300px] order-first lg:order-none"
      >
        {statsData.map((slide, slideIndex) => (
          <motion.div
            key={slideIndex}
            className={`absolute top-0 w-full h-full flex justify-center items-center transition-all duration-700 ease-in-out ${
              slideIndex === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            initial={{
              x: slideIndex === currentSlide ? 50 : -50,
              opacity: 0,
            }}
            animate={{
              x: slideIndex === currentSlide ? 0 : slideIndex > currentSlide ? 50 : -50,
              opacity: slideIndex === currentSlide ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.stats.map((stat, statIndex) => {
                const count = useCountUp(0, stat.value, 2); // Count-up animation starts at 0
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={statIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: statIndex * 0.2 }}
                    className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-transparent backdrop-blur-sm shadow-md shadow-black text-center border border-white/10"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-lg -z-10 blur-[8px] opacity-70 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
                    {/* Icon */}
                    <Icon className="text-white text-5xl mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                    {/* Count */}
                    <h3 className="text-4xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                      {count.toLocaleString()}
                    </h3>
                    {/* Label */}
                    <p className="text-lg text-gray-300 mt-2">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
