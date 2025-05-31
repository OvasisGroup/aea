import React from 'react'

export default function CaseStudies() {
  return (
    <div className='bg-[url("/images/redbg.jpg")] py-10 bg-cover bg-center flex items-center justify-between px-6'>
        <div className='container mx-auto md:flex items-center justify-between'>
          <p className='md:px-6 text-white font-bold text-2xl'>Explore Our Case Studies</p>
          <div className='flex items-center justify-between bg-white mt-4 md:mt-0'>
            <input type='text' placeholder='Search case studies' className='bg-transparent border border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary' />
            <button className='bg-primary text-white px-4 py-2 border border-primary'>Search</button>
          </div>          
        </div>
    </div>
  )
}
