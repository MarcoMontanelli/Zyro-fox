'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillsGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const skills = [
    {
      title: 'Programming',
      description:
        'Proficient in multiple programming languages, developing software and creating efficient algorithms.',
      image: 'programming.jpg',
    },
    {
      title: '3D Printing',
      description:
        'Expertise in 3D modeling and printing, turning digital designs into tangible prototypes.',
      image: 'printing.jpg',
    },
    {
      title: 'Photo/Video Editing',
      description:
        'Skilled in editing photos and videos with advanced tools to create stunning visuals.',
      image: 'editing.jpg',
    },
    {
      title: 'Content Creation',
      description:
        'Crafting engaging content across various platforms to build and inspire audiences.',
      image: 'banger.png',
    },
    {
      title: 'Electronics',
      description:
        'Building and repairing electronic devices, with a strong understanding of circuits and hardware.',
      image: 'electronics.jpeg',
    },
    {
      title: 'Sewing',
      description:
        'Designing and creating custom clothing and accessories with precision and creativity.',
      image: 'sewing.jpg',
    },
    {
      title: 'Cars',
      description:
        "I'm passionate about automotive mechanics and car customization.",
      image: 'car.jpg',
    },
    {
      title: 'Legos',
      description: 'Designing and building MOCs since 2009.',
      image: 'lego.jpg',
    },
  ];

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Manage body overflow for the modal
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the modal is open
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling when the modal is closed
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <div className="py-16 px-6 lg:px-16 bg-transparent">
      {/* Glowing Title */}
      <div className="flex items-center w-full mb-10">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm font-medium">Skills</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-105 transition-transform text-center mb-10"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className="relative w-full rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openImage(skill.image)}
          >
            {/* Skill Image */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-500" />
            {/* Text Content */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-bold drop-shadow-lg">{skill.title}</h3>
              <p className="text-sm mt-2">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-auto max-w-7xl max-h-screen"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={selectedImage}
                  alt="Fullscreen"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white text-2xl bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
                >
                  ✕
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body // Render the modal at the root level
      )}
    </div>
  );
}
