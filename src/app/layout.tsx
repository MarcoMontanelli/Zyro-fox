'use client';
import { Analytics } from "@vercel/analytics/react"
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  // Parallax effect for main content
  const { scrollY } = useViewportScroll();
  const parallaxOffset = useTransform(scrollY, [0, 600], [0, -150]);

  const colors = ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-green-500', 'bg-yellow-500'];

  const validateGlobulePosition = (top: number, left: number, size: number, margin: number) => {
    const viewportWidth = window.innerWidth;
    const isValidLeft = left + size + margin <= viewportWidth && left - margin >= 0;
    return isValidLeft;
  };

  const generateGlobules = (
    count: number,
    sizeRange: [number, number],
    margin: number,
    totalHeight: number
  ) => {
    const globules = [];
    for (let i = 0; i < count; i++) {
      let size, top, left;
      let valid = false;
      while (!valid) {
        size = Math.floor(Math.random() * (sizeRange[1] - sizeRange[0] + 1) + sizeRange[0]);
        top = Math.random() * (totalHeight - size - margin);
        left = Math.random() * (window.innerWidth - size - margin);
        valid = validateGlobulePosition(top, left, size, margin);
      }
      const color = colors[Math.floor(Math.random() * colors.length)];
      globules.push(
        <motion.div
          key={`${top}-${left}-${size}`}
          className={`absolute ${color} opacity-50 blur-3xl rounded-full`}
          style={{ width: `${size}px`, height: `${size}px`, top: `${top}px`, left: `${left}px` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      );
    }
    return globules;
  };

  const [globules, setGlobules] = useState<JSX.Element[]>([]);

  const mainRef = useRef<HTMLElement | null>(null);

  const regenerateGlobules = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      const containerHeight = mainRef.current?.offsetHeight || document.documentElement.scrollHeight;
      const count = Math.ceil(containerHeight / 500) * 10;
      const generatedGlobules = generateGlobules(count, [100, 200], 10, containerHeight);
      setGlobules(generatedGlobules);
    } else {
      setGlobules([]);
    }
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    // Regenerate globules when the route changes, after layout update
    const timer = setTimeout(() => {
      regenerateGlobules();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, regenerateGlobules]);

  const [cursorPosition, setCursorPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }
    return { x: 0, y: 0 };
  });

  const handleMouseMove = (event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <html lang="en">
      <body key={pathname} className="relative min-h-screen text-white overflow-x-hidden">
        {/* Fixed Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-space-dark to-void-purple" />
        <Analytics  mode="production"/>
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
        {typeof window !== 'undefined' && window.innerWidth > 768 && (
          <motion.div
            className="fixed w-[20rem] h-[20rem] rounded-full pointer-events-none mix-blend-soft-light"
            style={{
              background:
                'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 70%, transparent 100%)',
              top: `${cursorPosition.y - 160}px`,
              left: `${cursorPosition.x - 160}px`,
              zIndex: 50,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Glowing Globules */}
        <div className="absolute inset-0 pointer-events-none">{globules}</div>

        {/* Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <motion.main
          ref={mainRef}
          style={{ y: parallaxOffset }}
          className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16"
        >
          {children}
        </motion.main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
