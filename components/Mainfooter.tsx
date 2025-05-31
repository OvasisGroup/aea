import React from 'react'
import Image from 'next/image'

const MainFooter = () => {
  return (
    <>
    <div className='bg-gray-900 text-white w-full absolute bottom-0 left-0 right-0'>
      
      <div className='container mx-auto grid md:grid-cols-3 gap-4 py-10'>
        <div className='text-white'>
          <Image src="/images/aealimited.svg" alt="logo" width={100} height={50} />
          <p className='text-normal py-6'>AEA has consistently remained as the largest supplier of weighing solutions in East Africa to date. Over the years, the company has continuously diversified its activities and product offering due to the strong aftermarket support.</p>
        </div>

        <div className='flex items-center justify-center flex-col'>
          <Image src="/images/forafrica.svg" alt="logo" width={200} height={50} className='pt-4' />
        </div>

        <div>
          asfdafsa
        </div>
        
      </div>
      <div className='w-full bg-[url("/images/tc.jpg")] py-8 bg-cover bg-center flex items-center justify-between'>
        <div className='container mx-auto md:flex items-center justify-between'>
          <p>AEA Limited is a subsidiary of the Transcentury Group</p>
          <Image src="/images/tc_logo.svg" alt="tc" width={200} height={50} className='pt-4' />
        </div>
      </div>
    </div>
    </>
  )
}

export default MainFooter
