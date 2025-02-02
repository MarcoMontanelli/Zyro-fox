'use client';

import { motion } from 'framer-motion';
import SkillsGrid from '../components/SkillsGrid';
import ImagesSection from '../components/ImagesSection';

export default function About() {
  return (
    <div className="min-h-screen bg-space-gradient text-white flex flex-col items-center py-16 px-6 lg:px-16">
      {/* Divider with Text */}
      <div className="flex items-center w-full max-w-7xl mb-10">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm font-medium">Who I Am</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-5xl font-bold text-star-yellow text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
      >
        About Me
        {/* Glowing Effect */}
        <span className="absolute inset-0 rounded-lg pointer-events-none animate-glow bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-md" />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 text-lg lg:text-xl text-gray-300 text-center"
      >
        Zyro the fox, m 20.
      </motion.p>

      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        className="relative mt-12"
      >
        {/* Image Wrapper */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl">
          <img
            src="drake.svg" // Replace with your profile image path
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Glowing Effect */}
        <div className="absolute inset-0 rounded-full pointer-events-none animate-glow bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50 blur-lg" />
      </motion.div>

      {/* Biography */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
        className="mt-12 max-w-7xl text-center text-lg lg:text-xl text-gray-300 leading-relaxed"
      >
        <p> Hi there! My name is Zyro, and I’m someone who loves turning ideas into reality through creativity and technical skills. From programming to crafting, I enjoy working on projects that challenge me to learn and grow. </p>
        <p className="mt-4"> My expertise spans various fields. I have a strong background in programming, where I design software and build efficient solutions. I also have a passion for 3D printing, which allows me to bring digital models to life as physical prototypes. On the creative side, I work with photo and video editing tools to produce stunning visuals that tell compelling stories. </p>
        <p className="mt-4"> Beyond technology, I enjoy working with my hands. I have experience in sewing, where I create custom clothing and accessories with care and precision. Additionally, I’m passionate about electronics, designing and repairing devices to enhance functionality. My love for cars inspires me to learn more about mechanics and customization, while my enthusiasm for Legos has led me to design and build custom models since childhood. </p>
        <p className="mt-4"> I’m also a content creator, sharing my projects and ideas across platforms to connect with others and inspire creativity. Whether it’s coding, crafting, or creating, I’m always looking for new ways to explore my passions and make an impact. </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="w-full max-w-7xl mt-16">
        <SkillsGrid />
        <ImagesSection/>
      </div>
    </div>
  );
}
