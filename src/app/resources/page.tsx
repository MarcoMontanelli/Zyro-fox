'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import MyWebsites from '../components/Websites';

export default function Resources() {
    return (
        <>
            {/* Metadata for SEO */}
            <Head>
                <title>Resources | Work in Progress</title>
                <meta
                    name="description"
                    content="Discover a wide range of resources including code snippets, guides, tutorials, videos, and downloadable content."
                />
                <meta property="og:title" content="Resources | Work in Progress" />
                <meta
                    property="og:description"
                    content="A treasure trove of resources, including code snippets, guides, tutorials, and more."
                />
                <meta property="og:image" content="/drake.PNG" />
                <meta property="og:url" content="https://your-domain.com/resources" />
                <meta name="twitter:card" content="/drake.PNG" />
                <link rel="canonical" href="https://your-domain.com/resources" />
            </Head>

            {/* Main Section */}
            <div className=" text-white flex flex-col items-center justify-start pt-20 px-6 sm:px-12 md:px-16 lg:px-20 ">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"
                >
                    Work in Progress
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                    className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 text-center max-w-2xl leading-relaxed"
                    style={{
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                >
                    This page is under construction. Once completed, you’ll find a treasure trove of resources, including:
                </motion.p>

                {/* Features */}
                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                    className="mt-6 space-y-4 text-base sm:text-lg md:text-xl text-nebula-pink text-center list-none"
                >
                    {[
                        { icon: '💻', text: 'Code Snippets' },
                        { icon: '📚', text: 'Guides & Tutorials' },
                        { icon: '🎥', text: 'Videos' },
                        { icon: '📄', text: 'Downloadable PDFs' },
                        { icon: '🖼️', text: 'Images & More' },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center justify-center gap-2">
                            <span className="text-star-yellow text-xl sm:text-2xl">{item.icon}</span>
                            {item.text}
                        </li>
                    ))}
                </motion.ul>
            </div>

            {/* Websites Section */}
            <div className=" py-12 px-6 sm:px-12 md:px-16 lg:px-20 text-white">
                <MyWebsites />
            </div>
        </>
    );
}
