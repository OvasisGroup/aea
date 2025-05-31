import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='bg-gray-900 p-4'>
    <div className='bg-gray-900 text-white px-6 flex items-center justify-between container mx-auto'>
        <div className=''>
            <Link href="/" className="text-2xl font-bold">
            <Image src="/images/aealimited.svg" alt="logo" width={100} height={50} />
            </Link>
        </div>
        <div className='flex space-x-4'>
            <Link href="/" className="text-white">Home</Link>
            <Link href="/" className="text-white">About Us</Link>
            <Link href="/" className="text-white">Services</Link>
        </div>
        <div>
            <Button>Get Started</Button>
        </div>
    </div>
    </div>
  )
}
