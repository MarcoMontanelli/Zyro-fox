'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SmartButtonProps {
  text: string;
  link: string;
  icon?: ReactNode; // Optional icon to be passed as a prop
}

export default function SmartButton({ text, link, icon }: SmartButtonProps) {
  return (
    <motion.a
      href={link}
      className="relative inline-flex items-center px-8 py-4 text-lg font-light text-white rounded-xl backdrop-blur-sm bg-transparent border-[2px] border-white/20 shadow-2xl shadow-white/50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* White Hue/Glow Around the Button */}
      <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-r from-white/10 via-white/30 to-white/10 blur-xl opacity-75" />

      {/* Icon (if provided) */}
      {icon && (
        <motion.div
          className="mr-4 text-xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      )}

      {/* Text Content */}
      <span className="relative z-10">{text}</span>
    </motion.a>
  );
}
