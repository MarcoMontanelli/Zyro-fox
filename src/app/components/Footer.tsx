'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaDiscord, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const links = ['Home', 'About', 'Gallery', 'Resources', 'Contact'];

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeInFromBottom}
      className="relative w-full pb-12 px-4 sm:px-6 lg:px-16 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
        {/* Logo and Quote */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="h-24 w-24 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-white/20"
          >
            <img
              src="drake.png" // Replace with your actual logo image path
              alt="Logo"
              className="h-full w-full object-cover rounded-full"
            />
          </motion.div>
          {/* Quote */}
          <p className="text-xl font-light text-white text-center">
            ZyroFox
          </p>
        </motion.div>

        {/* Links with Animated Underline */}
        <motion.ul
          className="relative flex flex-wrap justify-center space-x-4 sm:space-x-6 text-white text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromBottom}
        >
          {links.map((link, index) => (
            <li key={index} className="relative group">
              <Link
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:scale-105 transition-transform text-white relative group"
              >
                {link}
                {/* Underline */}
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Divider */}
        <hr className="w-full border-white/10" />

        {/* Social Media and Copyright */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromBottom}
        >
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            {[
              { icon: FaTiktok, link: "https://www.tiktok.com/@smont2rimonta" },
              { icon: FaInstagram, link: "https://www.instagram.com/zyro_fox24/" },
              { icon: FaTwitter, link: "https://twitter.com" },
              { icon: FaYoutube, link: "https://www.youtube.com/@madonnaaramiaca1410" },
              { icon: FaDiscord, link: "https://discord.gg/kV4TEmqHUg" },
            ].map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-white text-2xl hover:text-gray-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center">
            © 2025 ZyroFox. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
