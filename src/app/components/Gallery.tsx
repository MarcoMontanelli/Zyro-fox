'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface MediaData {
  type: 'image' | 'video';
  title: string;
  caption: string;
  mediaUrl: string;
  posterUrl?: string; // Optional poster image for videos
}

const galleryData: MediaData[] = [
  {
    type: 'image',
    title: 'Lego Porsche 911',
    caption: 'My Lego Porsche 911 set.',
    mediaUrl: 'car.jpg',
  },
  
  {
    type: 'image',
    title: 'Protogen Matrix',
    caption: 'The making of a protogen face.',
    mediaUrl: 'proto.jpg',
  },
  {
    type: 'video',
    title: 'Geronimo Twinkson',
    caption: 'A random Geronimo Stilton edit, art by Melly Vuong',
    mediaUrl: 'geronimo.mp4',
    posterUrl: 'geronimo.PNG',
  },
  
  {
    type: 'video',
    title: 'Bro Moment',
    caption: '20 psc chicken mcnuggets.',
    mediaUrl: 'bro.mp4',
    posterUrl: 'bro.PNG',
  },
  {
    type: 'video',
    title: 'Das auto',
    caption: 'Golf shitpost.',
    mediaUrl: 'golf.mp4',
    posterUrl: 'golf.PNG',
  },
  {
    type: 'video',
    title: 'Aliexpress Moment',
    caption: 'sigma toilet.',
    mediaUrl: 'gorila.mp4',
    posterUrl: 'gorila.PNG',
  },
  {
    type: 'video',
    title: 'Hazbin Hotel be like',
    caption: 'The characters from Hazbin Hotel.',
    mediaUrl: 'hazbin.mp4',
    posterUrl: 'hazbin.PNG',
  },
  {
    type: 'video',
    title: 'Helluva Boss | Loona',
    caption: 'We all know why the show is popular.',
    mediaUrl: 'helluva.mp4',
    posterUrl: 'helluva.PNG',
  },
  {
    type: 'video',
    title: 'Housetti Md',
    caption: 'Massimo il boss.',
    mediaUrl: 'house.mp4',
    posterUrl: 'house.PNG',
  },
  {
    type: 'video',
    title: 'Losercity inspired laptop',
    caption: 'Stickerbomb.',
    mediaUrl: 'laptop.mp4',
    posterUrl: 'laptop.PNG',
  },
  {
    type: 'video',
    title: 'Low Taper Fade',
    caption: 'The next step of the operation.',
    mediaUrl: 'lowtaperfade.mp4',
    posterUrl: 'lowtaperfade.PNG',
  },
  {
    type: 'video',
    title: 'Paw Job Location with bro',
    caption: 'Mystical pawjob location for bro.',
    mediaUrl: 'pawjob.mp4',
    posterUrl: 'pawjob.PNG',
  },
  {
    type: 'video',
    title: 'Sigma Moment',
    caption: 'sitting wolf.',
    mediaUrl: 'sigma.mp4',
    posterUrl: 'sigma.PNG',
  },
];

export default function MediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaData | null>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  // Set a flag to detect client environment
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Lock page scroll when modal is open
  useEffect(() => {
    if (selectedMedia && isBrowser) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedMedia, isBrowser]);

  return (
    <div className="py-12">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        {galleryData.map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === 'image' ? (
              <img
                src={item.mediaUrl}
                alt={item.title}
                className="w-full h-[200px] sm:h-[300px] object-cover"
              />
            ) : (
              <div className="relative w-full h-[200px] sm:h-[300px] bg-black">
                <img
                  src={item.posterUrl || '/default-video-poster.jpg'}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity">
                  <svg
                    className="w-12 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 22v-20l18 10-18 10z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Dark Tint */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity" />

            {/* Title and Caption */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isBrowser &&
        createPortal(
          <AnimatePresence>
            {selectedMedia && (
              <motion.div
                className="fixed inset-0 z-[1000] bg-black bg-opacity-80 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMedia(null)}
              >
                {selectedMedia.type === 'image' ? (
                  <motion.img
                    src={selectedMedia.mediaUrl}
                    alt={selectedMedia.title}
                    className="w-auto max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <motion.video
                    src={selectedMedia.mediaUrl}
                    className="w-auto max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    controls
                    autoPlay
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
