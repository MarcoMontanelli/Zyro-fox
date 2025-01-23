'use client';

import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import SmartButton from './SmartButton';

export default function ResponsiveGrid() {
  const sections = [
    {
      title: 'Subscribe to My YouTube Channel',
      description: 'Stay updated with my latest tutorials and projects by subscribing to my YouTube channel.',
      cta: 'Subscribe Now',
      link: 'https://www.youtube.com/@madonnaaramiaca1410',
    },
    {
      title: 'Check Out My Resources',
      description: 'Explore my curated collection of resources to enhance your learning journey.',
      cta: 'Explore Resources',
      link: '/resources',
    },
    {
      title: 'Contact Me',
      description: 'Got questions or ideas? Let’s connect and create something amazing together!',
      cta: 'Get in Touch',
      link: '/contact',
    },
    {
      title: 'Look at My Gallery',
      description: 'Take a peek at my creative projects and designs in the gallery.',
      cta: 'View Gallery',
      link: '/gallery',
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Glowing Title */}
        <div className="flex items-center w-full mb-10">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-4 text-gray-400 text-sm font-medium">CTA</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <div className="flex flex-col items-center justify-center w-full mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex items-center text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-105 transition-transform"
          >
            <FaLink className="mr-4" /> Quick links
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="text-lg lg:text-xl text-gray-400 mt-4 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            Your support helps me continue creating amazing content and bringing new ideas to life.
            Every little bit counts!
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col p-6 bg-slate-900/90 rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Top Line */}
              <hr className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-400 border-0 rounded-full" />

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mt-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                {section.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-4 flex-1 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                {section.description}
              </p>

              {/* CTA Button */}
              <motion.a
                href={section.link}
                className="inline-block mt-6 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(138,43,226,0.6)_0%,rgba(138,43,226,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                  <span>{section.cta}</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
