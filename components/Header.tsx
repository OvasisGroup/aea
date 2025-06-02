"use client"
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {HeroitemsData} from '@/data/HeroData'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideRight } from '@/lib/animation';
import Image from 'next/image';

export default function Header() {
    const [activeData, setActiveData] = React.useState(HeroitemsData[0]);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroitemsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        setActiveData(HeroitemsData[currentIndex]);
    }, [currentIndex])

  return (
    <div className='bg-[url(/images/bg-hero.jpg)] bg-cover bg-no-repeat bg-center mb-10'>
        <Navbar/>
    <div className='container mx-auto  h-[90vh]' >
        <div className='grid h-full grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col items-start justify-center px-4 text-white md:px-10'>
                <AnimatePresence mode='wait'>
                <motion.h1 
                key={activeData.title}
                variants={SlideRight(0.2)}
                initial='hidden'
                animate='show'
                exit='exit'
                 className='mb-4 text-4xl font-black md:text-6xl text-primary '>{activeData.title}</motion.h1>
                </AnimatePresence>
                <AnimatePresence mode='wait'>
                <motion.p
                key={activeData.description}
                variants={SlideRight(0.4)}
                initial='hidden'
                animate='show'
                exit='exit'
                 className='mb-6 text-lg font-light md:text-xl'>{activeData.description}</motion.p>
                </AnimatePresence>
                <Link href={activeData.link} className='px-6 py-3 text-white transition duration-300 rounded bg-primary hover:bg-green-800'></Link> 
            </div>
            <div className='flex items-end justify-center h-full'>
            <AnimatePresence mode='wait'>
                <motion.div
                key={activeData.title}
                variants={SlideRight(0.6)}
                initial='hidden'
                animate='show'
                exit='exit'
                 className=''>
                    <Image src={activeData.image} alt={activeData.title} width={500} height={1000} className='' />
                </motion.div>
            </AnimatePresence>
            </div>
        </div>
        </div>
        
    </div>
  )
}
