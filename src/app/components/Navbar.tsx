'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <AnimatePresence>
      {/* Navbar container */}
      <motion.header
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 backdrop-blur-sm bg-transparent"
      >
        <nav className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            {/* Links Section */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Gallery', 'Resources', 'Contact'].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-sm text-white hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Logo Section */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="flex items-center space-x-2"
            >
              <h1 className="text-xl font-light text-white hover:scale-105 transition-transform">
                ZyroFox
              </h1>
              <div className="h-8 w-8 rounded-full">
                <img
                  src="drake.png" // Replace with the actual image path
                  alt="Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMobileMenu}
                className="relative text-white focus:outline-none"
              >
                {/* Hamburger Icon Animation */}
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white mb-1"
                ></motion.span>
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white mb-1"
                ></motion.span>
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white"
                ></motion.span>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute top-16 left-0 w-full h-screen backdrop-blur-md bg-black opacity-90 flex flex-col items-center justify-center space-y-8 px-4"
            >
              {['Home', 'About', 'Gallery', 'Resources', 'Contact'].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    href={`/${link.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-white hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
