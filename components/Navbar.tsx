import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'

export default function Navbar() {
  return (
    <div className='border-b p-0'>
    <div className=' text-white px-6 py-4 flex items-center justify-between container mx-auto'>
        <div className='border-r pr-4 mr-4 border-gray-600'>
            <Link href="/" className="text-2xl font-bold">
            <Image src="/images/aealimited.svg" alt="logo" width={100} height={50} />
            </Link>
        </div>
        <div className='flex space-x-4'>
            <Link href="/" className="text-white">Home</Link>
            <Link href="/" className="text-white">About Us</Link>
            <Link href="/" className="text-white">Services</Link>
        </div>
        <div className='border-l pl-4 ml-4 border-gray-600 flex items-center space-x-2'>
            <Link href="/" className="text-white bg-primary px-4 py-2 flex gap-2">Get Started <ArrowRightIcon/> </Link>
        </div>
    </div>
    </div>
  )
}
