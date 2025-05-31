'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IntroductionText() {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // amount controls how much of the element needs to be visible
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-bold mb-4">This will reveal on scroll</h1>
        <p className="text-lg text-gray-600">More content to reveal with a smooth animation.</p>
      </motion.div>
    </div>
  );
}
