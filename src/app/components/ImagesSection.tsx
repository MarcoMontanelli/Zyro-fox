'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { FaDragon, FaExpand, FaWolfPackBattalion } from 'react-icons/fa'; // Icon for the fullscreen button
import { FaImage } from 'react-icons/fa'; // Icon for the section title

export default function ImagesSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const images = [
        {
            title: 'Zyro the fox',
            description: 'Personality: Zyro is a vibrant and witty soul who loves exploring new places and meeting people from all walks of life. His cheerful demeanor and quick thinking make him the go-to friend in tricky situations. He has a passion for technology and spends his evenings tinkering with gadgets or gaming online with friends. Zyro is fiercely loyal and always looks for the silver lining, even in the toughest times. Interests: Urban exploring, video games, coding, and baking sweet treats (though he’s still learning to keep them edible). Fun Fact: Zyro has a small, glowing pendant he wears everywhere, a keepsake from his late grandmother that inspires him to follow his dreams.',
            image: 'drake.png',
            caption: 'Zyro',
        },
       
    ];

    const openImage = (image: string) => {
        setSelectedImage(image);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden'; // Disable background scrolling
        }
    };

    const closeModal = () => {
        setSelectedImage(null);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = ''; // Re-enable background scrolling
        }
    };

    return (
        <div className="pt-16 px-6 lg:px-16 bg-transparent">
            {/* Header */}
            <div className="flex items-center w-full mb-10 max-w-7xl mx-auto">
                <hr className="flex-grow border-gray-600" />
                <span className="mx-4 text-gray-400 text-sm font-medium">Characters</span>
                <hr className="flex-grow border-gray-600" />
            </div>

            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative text-4xl lg:text-5xl font-bold text-white text-center mb-6"
            >
                <span
                    className="relative z-10"
                    style={{
                        textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                    }}
                >
                    My Characters
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-lg animate-pulse"></div>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-lg lg:text-xl text-gray-300 text-center mb-12 transition-transform hover:scale-105"
                style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.6)',
                }}
            >
                A glimpse into my creative journey, showcasing my OCs.
            </motion.p>

            {/* Layout */}
            <div className="grid grid-cols-1 gap-16 max-w-7xl mx-auto">
                {images.map((item, index) => (
                    <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                        {index % 2 === 0 ? (
                            <>
                                {/* Image */}
                                <motion.div
                                    className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    {/* White Shadow/Hue */}
                                    <div className="absolute inset-0 pointer-events-none rounded-lg ring-4 ring-white/60" />

                                    {/* Fullscreen Button */}
                                    <button
                                        onClick={() => openImage(item.image)}
                                        className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-80 hover:bg-opacity-90 rounded-full p-1 transition z-20"
                                        style={{ width: '32px', height: '32px' }}
                                    >
                                        <FaExpand className="text-sm" />
                                    </button>

                                    {/* Caption */}
                                    <p className="absolute bottom-4 right-4 text-white text-lg lg:text-xl font-bold bg-black bg-opacity-60 px-4 py-2 rounded-lg shadow-md">
                                        {item.caption}
                                    </p>
                                </motion.div>

                                {/* Text Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    className="text-center lg:text-left px-4"
                                >
                                    <h3
                                        className="flex items-center text-3xl font-bold text-white"
                                        style={{
                                            textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                                        }}
                                    >
                                        <FaWolfPackBattalion className="mr-2 text-purple-700" />
                                        {item.title}
                                    </h3>
                                    <hr className="my-4 border-gray-600" />
                                    <p
                                        className="text-gray-300 text-lg hover:scale-105 transition-transform"
                                        style={{
                                            textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </motion.div>
                            </>
                        ) : (
                            <>
                                {/* Text Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    className="text-center lg:text-left px-4"
                                >
                                    <h3
                                        className="flex items-center text-3xl font-bold text-white"
                                        style={{
                                            textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                                        }}
                                    >
                                        <FaDragon className="mr-2 text-blue-300" />
                                        {item.title}
                                    </h3>
                                    <hr className="my-4 border-gray-600" />
                                    <p
                                        className="text-gray-300 text-lg hover:scale-105 transition-transform"
                                        style={{
                                            textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </motion.div>

                                {/* Image */}
                                <motion.div
                                    className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    {/* White Shadow/Hue */}
                                    <div className="absolute inset-0 pointer-events-none rounded-lg ring-4 ring-white/60" />

                                    {/* Fullscreen Button */}
                                    <button
                                        onClick={() => openImage(item.image)}
                                        className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-80 hover:bg-opacity-90 rounded-full p-1 transition z-20"
                                        style={{ width: '32px', height: '32px' }}
                                    >
                                        <FaExpand className="text-sm" />
                                    </button>

                                    {/* Caption */}
                                    <p className="absolute bottom-4 right-4 text-white text-lg lg:text-xl font-bold bg-black bg-opacity-60 px-4 py-2 rounded-lg shadow-md">
                                        {item.caption}
                                    </p>
                                </motion.div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Fullscreen Modal */}
            {isBrowser &&
                createPortal(
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeModal}
                            >
                                <motion.img
                                    src={selectedImage}
                                    alt="Fullscreen"
                                    className="w-auto max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-white text-2xl bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
                                >
                                    ✕
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </div>
    );
}
