'use client';

import { motion } from 'framer-motion';
import { FaCoffee, FaPaypal, FaPatreon, FaYoutube, FaTwitch } from 'react-icons/fa';
import SmartButton from './SmartButton'; // Import the custom SmartButton component

export default function SupportMe() {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 lg:px-16 pt-4 max-w-7xl mx-auto">
      {/* Divider with Text */}
      <div className="flex items-center w-full mb-10">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm font-medium">Support Me</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex items-center text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-105 transition-transform"
      >
        <FaCoffee className="mr-4" /> Buy Me a Coffee
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        className="text-lg lg:text-xl text-gray-400 mt-4 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      >
        Your support helps me continue creating amazing content and bringing new ideas to life. Every little bit counts!
      </motion.p>

      {/* Support Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {[
          { href: '#', icon: <FaPaypal />, label: 'PayPal' },
          { href: '#', icon: <FaPatreon />, label: 'Patreon' },
          { href: '#', icon: <FaYoutube />, label: 'Become a Channel Member' },
          { href: '#', icon: <FaTwitch />, label: 'Twitch' },
        ].map(({ href, icon, label }, index) => (
          <SmartButton
            key={index}
            text={label}
            link={href}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}
