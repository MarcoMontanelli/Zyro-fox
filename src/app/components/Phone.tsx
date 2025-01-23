'use client';

import { motion } from 'framer-motion';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';

interface PhoneSectionProps {
  videoId: string; // Prop for the YouTube video ID
}

export default function PhoneSection({ videoId }: PhoneSectionProps) {
  const textVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 },
    },
  };

  const deviceVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 },
    },
  };

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative flex flex-col items-center lg:items-start justify-center px-6 lg:px-16 py-2 max-w-7xl mx-auto space-y-10">
      {/* Text Section */}
      <motion.div
        className="text-center lg:text-left w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex items-center w-full mb-6 lg:mb-10">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-4 text-gray-400 text-sm font-medium">Featured</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          variants={textVariants}
        >
          Watch my latest video on YouTube
        </motion.h2>

        <motion.p
          className="text-lg lg:text-xl text-gray-400 mt-4"
          variants={textVariants}
        >
          Discover the newest updates on my channel.
        </motion.p>
      </motion.div>

      {/* Device and Responsive Iframe Section */}
      <motion.div
        className="w-full flex justify-center lg:justify-end"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={deviceVariants}
      >
        <div className="hidden lg:flex w-full justify-center">
          <DeviceFrameset device="MacBook Pro">
            <iframe
              src={videoUrl}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </DeviceFrameset>
        </div>

        <div className="lg:hidden w-full">
          <iframe
            src={videoUrl}
            className="w-full h-[300px] md:h-[400px]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
