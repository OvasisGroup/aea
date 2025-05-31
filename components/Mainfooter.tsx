import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MailingList from './MailingList'

const MainFooter = () => {
  return (
    <div className='bg-gray-900 text-white w-full  bottom-0 left-0 right-0'>
      <MailingList/>
      <div className='container mx-auto grid md:grid-cols-3 gap-4 py-10 px-6'>
        <div className='text-white px-6'>
          <Image src="/images/aealimited.svg" alt="logo" width={100} height={50} />
          <p className='text-normal py-6'>AEA has consistently remained as the largest supplier of weighing solutions in East Africa to date. Over the years, the company has continuously diversified its activities and product offering due to the strong aftermarket support.</p>
        </div>

        <div className='flex items-center justify-center flex-col px-6'>
          <Image src="/images/forafrica.svg" alt="logo" width={200} height={50} className='pt-4' />
        </div>

        <div className='flex flex-col md:items-end md:justify-end px-6'>
          <p className='font-bold'>Address</p>
          <p>34 Factory Street, </p>
          <p>Off Commercial Street, Nairobi, Kenya</p>
          <p className='md:text-right'>Tel: +254 724 259 815</p>
          <div className='flex flex-row items-center md:justify-end mt-4 gap-2'>
            <Link href='https://www.facebook.com/AEALtd' target='_black'>
            <div className='pl-2' ><Image src="/images/facebook.svg" alt="facebook" width={30} height={30} className='' /></div>
            </Link>
            <Link href='https://x.com/AEA_LIMITED' target='_black'>
            <div className='pl-2' ><Image src="/images/x.svg" alt="x" width={30} height={30} className='' /></div>
            </Link>
            <Link href='https://www.linkedin.com/in/aea-limited-a3172417b/' target='_black'>
            <div className='pl-2' ><Image src="/images/linkedin.svg" alt="linkedin" width={30} height={30} className='' /></div>
            </Link>
          </div>
        </div>

      </div>
      <div className='w-full bg-[url("/images/tc.jpg")] py-8 bg-cover bg-center flex items-center justify-between px-6'>
        <div className='container mx-auto md:flex items-center justify-between px-6'>
          <p className='md:px-6'>AEA Limited is a subsidiary of the Transcentury Group</p>
          <Image src="/images/tc_logo.svg" alt="tc" width={200} height={50} className='pt-4 mr-6' />
        </div>
      </div>
    </div>
  )
}

export default MainFooter
