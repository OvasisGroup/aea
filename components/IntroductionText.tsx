'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IntroductionText() {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // amount controls how much of the element needs to be visible
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-6'>
        <div className="flex flex-col justify-center">
            <Image src={"/images/combined_images.jpg"} alt="logo" width={1000} height={450} className='w-full rounded-3xl bg-white' />
        </div>
        <div className="flex flex-col justify-center">
            <div>
                <p className='font-bold mb-4'>ABOUT US</p>
        <h1 className="md:text-3xl text-xl font-light text-primary mb-4">AEA has consistently remained as the largest supplier of weighing solutions in East Africa to date. Over the years, the company has continuously diversified its activities and product offering due to the strong aftermarket support.</h1>
        <p className=" text-gray-600">AEA is a trading arm of TransCentury PLC providing innovative solutions for Africa with a proven track record running over five-decades. The company was initially established primarily with a focus on the supply, manufacture and maintenance of industrial and domestic weighing equipment but over the years, AEA Limited has since diversified into other major sectors due to the strong aftermarket support..</p>
        </div>
        </div>
        
        </div>
      </motion.div>
    </div>
  );
}
