// components/FramerSlider.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, image: '/images/MIKESE.jpg', content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
  { id: 4, content: 'Slide 4' },
];

export default function FramerSlider() {
  const [index, setIndex] = useState(0);

  const paginate = (direction: number) => {
    setIndex((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-2xl overflow-hidden">
      <div className="relative h-64 flex items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="absolute w-full h-full flex items-center justify-center border border-white text-2xl"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[index].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
