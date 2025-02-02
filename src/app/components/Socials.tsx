'use client';

import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaTwitter, FaTiktok, FaDiscord, FaPaw } from 'react-icons/fa';

export default function MySocials() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-16 pt-8 max-w-7xl mx-auto">
      {/* Divider with Text */}
      <div className="flex items-center w-full">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm font-medium">Stay Connected</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex items-center text-4xl lg:text-5xl font-bold text-white mt-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105 transition-transform"
      >
       <FaPaw className="mr-4" /> Connect with Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        className="text-lg lg:text-xl text-gray-400 mt-4 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
      >
        Follow me on social media to stay updated and connect with me directly.
      </motion.p>

      {/* Social Media Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Button Template */}
        {[
          { href: 'https://www.youtube.com/@madonnaaramiaca1410', icon: FaYoutube, label: 'YouTube', color: 'backdrop-blur-sm bg-transparent' },
          { href: 'https://www.instagram.com/zyro_fox24/', icon: FaInstagram, label: 'Instagram', color: 'backdrop-blur-sm bg-transparent' },
          { href: '#', icon: FaTwitter, label: 'X', color: 'backdrop-blur-sm bg-transparent' },
          { href: 'https://www.tiktok.com/@smont2rimonta', icon: FaTiktok, label: 'TikTok', color: 'backdrop-blur-sm bg-transparent' },
          { href: 'https://discord.gg/kV4TEmqHUg', icon: FaDiscord, label: 'Discord', color: 'backdrop-blur-sm bg-transparent' },
        ].map(({ href, icon: Icon, label, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`group relative w-16 h-16 rounded-full flex items-center justify-center ${color} bg-opacity-90 shadow-md shadow-black transition-transform`}
          >
            {/* Icon */}
            <Icon className="text-white text-2xl" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
            {/* Gradient Border */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),rgba(255,255,255,0))] animate-pulse group-hover:animate-none" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
