'use client';

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback, useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position
  const handleMouseMove = (event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Parallax effect for main content
  const { scrollY } = useViewportScroll();
  const parallaxOffset = useTransform(scrollY, [0, 600], [0, -150]);

  return (
    <html lang="en">
      <body className="relative min-h-screen text-white">
        {/* Fixed Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-space-dark to-void-purple" />

        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            fpsLimit: 60,
            particles: {
              number: { value: 150 },
              color: { value: '#ffffff' },
              shape: { type: 'circle' },
              opacity: { value: 1, random: true },
              size: { value: 2, random: true },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                outModes: { default: 'out' },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'repulse' },
                resize: true,
              },
              modes: {
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            detectRetina: true,
          }}
        />

        {/* Flashlight Cursor Effect */}
        <motion.div
          className="fixed w-[20rem] h-[20rem] rounded-full pointer-events-none mix-blend-soft-light"
          style={{
            background: `radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 70%, transparent 100%)`,
            top: cursorPosition.y - 160,
            left: cursorPosition.x - 160,
            zIndex: 50,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <motion.main
          style={{ y: parallaxOffset }}
          className="relative z-10  "
        >
          {children}
        </motion.main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
