"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function Divisions() {
  return (
    <div className=' mb-20'>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // amount controls how much of the element needs to be visible
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='container mx-auto px-6 mb-10'>
            <p className='font-black text-3xl text-primary pb-4'>Our Divisions</p>
            <p className='mb-6 text-xl font-light'>AEA has consistently remained as the largest supplier of weighing solutions in East Africa to date. Over the years, the company has continuously diversified its activities and product offering due to the strong aftermarket support.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-6 container mx-auto px-6'>
        <div className="flex flex-col justify-center text-center items-center bg-white p-10 hover:border-b-4 border-primary transition-all duration-1000">
            <Image src={"/images/SVG/trading.svg"} alt="logo" width={80} height={80} className='mb-4' />
            <h1 className="md:text-2xl text-xl font-light text-primary mb-4">Trading Division</h1>
            <p className=" text-gray-600">We are the largest supplier of weighing solutions in East Africa, providing innovative and reliable products to meet diverse needs in every possible industry in East and Central Africa.</p>
            <Link href="/trading" className="text-primary hover:underline flex items-center gap-2 mt-4">
              Learn More <ArrowRightIcon/>
            </Link>
        </div>
        <div className="flex flex-col justify-center text-center items-center bg-white p-10 hover:border-b-4 border-primary transition-all duration-1000">
            <Image src={"/images/SVG/construction.svg"} alt="logo" width={80} height={80} className='mb-4' />
            <h1 className="md:text-2xl text-xl font-light text-primary mb-4">Construction Division</h1>
            <p className=" text-gray-600">We are a leading provider of construction equipment and solutions, offering high-quality products and reliable services to support the needs of the construction industry.</p>
            <Link href="/manufacturing" className="text-primary hover:underline flex items-center gap-2 mt-4">
              Learn More <ArrowRightIcon/>
            </Link>
            </div>
            <div className="flex flex-col justify-center text-center items-center bg-white p-10 hover:border-b-4 border-primary transition-all duration-1000">
            <Image src={"/images/SVG/operations.svg"} alt="logo" width={80} height={80} className='mb-4' />
            <h1 className="md:text-2xl text-xl font-light text-primary mb-4">Operations Division</h1>
            <p className=" text-gray-600">We are a leading provider of project operations and management solutions, delivering high-quality services and efficient execution to ensure the successful delivery of projects.</p>
            <Link href="/manufacturing" className="text-primary hover:underline flex items-center gap-2 mt-4">
              Learn More <ArrowRightIcon/>
            </Link>
            </div>
        </div>
             
      </motion.div>
    </div>
  )
}
