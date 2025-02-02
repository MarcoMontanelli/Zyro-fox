'use client';

import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

export default function MyWebsites() {
    const websites = [
        {
            name: 'Brainrot Quiz',
            link: 'https://best-quiz.vercel.app',
            image: '/quiz.PNG', // Replace with your static image path
        },
        {
            name: 'A simple image converter',
            link: 'https://imageconverter-alpha.vercel.app/',
            image: 'imageConverter.PNG', // Replace with your static image path
        },
    ];

    return (
        <div className="pt-16 px-6 lg:px-16 bg-transparent">
            {/* Header */}
            <div className="flex items-center w-full mb-10 max-w-7xl mx-auto">
                <hr className="flex-grow border-gray-600" />
                <span className="mx-4 text-gray-400 text-sm font-medium">My Websites</span>
                <hr className="flex-grow border-gray-600" />
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {websites.map((site, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* MacOS-style Top Bar */}
                        <div className="flex items-center justify-between p-2 bg-gray-800">
                            <div className="flex space-x-2 ml-2">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                            </div>

                            {/* Search bar */}
                            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-1 text-white text-sm w-3/4">
                                <FaSearch className="text-gray-400 mr-2" />
                                <span className="truncate">{site.link}</span>
                            </div>
                        </div>

                        {/* Website Preview */}
                        <a href={site.link} target="_blank" rel="noopener noreferrer">
                            <div className="relative">
                                <img
                                    src={site.image}
                                    alt={`${site.name} Preview`}
                                    className="w-full h-56 md:h-64 object-cover"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <p className="text-white text-lg font-semibold">
                                        {site.name}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
