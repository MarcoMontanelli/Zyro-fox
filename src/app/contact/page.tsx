'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaClipboard, FaTiktok } from 'react-icons/fa';
import SmartButton from '../components/SmartButton';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const emailAddress = 'dragonsemporium2023@gmail.com'; // Replace with your email address

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name || 'Anonymous'}`;
    const body = `Name: ${name || 'Anonymous'}\nEmail: ${email || 'N/A'}\n\n${message}`;
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  const socials = [
    { platform: 'Tiktok', icon: FaTiktok, link: 'https://www.tiktok.com/@smont2rimonta' },
    { platform: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/dragonsemporiumig/' },
    { platform: 'Twitter', icon: FaTwitter, link: '#' },
    { platform: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com/@madonnaaramiaca1410' },
  ];

  return (
    <div className=" bg-space-gradient text-white flex flex-col items-center py-16 px-6 lg:px-16">
      {/* Divider with Text */}
      <div className="flex items-center w-full max-w-4xl mb-10">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400 text-sm font-medium">Get in Touch</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Title and Description */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-star-yellow text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-105 transition-transform"
      >
        Contact Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg lg:text-xl text-gray-300 mt-4 font-extralight text-center"
      >
        I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
      </motion.p>

      {/* Social Media Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {socials.map(({ platform, icon: Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center px-6 py-3 bg-transparent backdrop-blur-sm border-[2px] border-white/20 rounded-lg text-white shadow-lg shadow-gray-400/10 space-x-3 hover:shadow-gray-400/50 hover:border-gray-300 transition-transform"
          >
            <Icon className="text-2xl" />
            <span className="text-lg font-extralight">{`DM me on ${platform}`}</span>
          </motion.a>
        ))}
      </div>

      {/* Email Section */}
      <div className="mt-10 flex flex-col items-center">
        <p className="text-lg lg:text-xl font-light text-gray-300">Reach me directly at:</p>
        <div className="flex items-center space-x-4 mt-2">
          <p className="text-lg font-medium">{emailAddress}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyToClipboard}
            className="p-2 rounded-full bg-gray-800 text-white shadow-md hover:shadow-lg transition-all"
          >
            <FaClipboard />
          </motion.button>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          className="fixed top-20 right-5 bg-purple-950/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg"
          variants={fadeInFromRight}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Email copied to clipboard!
        </motion.div>
      )}

      {/* Contact Form 
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mt-16 space-y-6 w-full max-w-lg text-center"
        onSubmit={handleSendMessage}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
        </motion.div>
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
        </motion.div>
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
        </motion.div>
        <div className="flex justify-center">
          <SmartButton text="Send Message" link="#" />
        </div>
      </motion.form>
      */}
    </div>
  );
}
