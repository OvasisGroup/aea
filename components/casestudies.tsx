// import { ArrowRightIcon } from 'lucide-react'
// import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import FramerSlider from './Sliders'

export default function CaseStudies() {



  return (
    <div className='bg-[url("/images/redbg.jpg")] bg-cover bg-center'>
        <div className='container mx-auto grid md:grid-cols-2 gap-6 px-6'>
            <div className=''>
                <h2 className='text-3xl font-bold text-yellow-300 mt-10'>Case Studies</h2>
                <p className='text-white md:text-4xl mt-4 text-2xl'>Explore our case studies to see how we have helped businesses like yours achieve their goals.</p>
                <div className='my-10 ml-0'>
                 <FramerSlider/>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Image src="/images/man.png" alt="tc" width={450} height={50} className='pt-4 mr-6' />
            </div>
        </div>
    </div>
  )
}
