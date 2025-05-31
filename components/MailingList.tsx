import React from 'react'

export default function MailingList() {
  return (
    <div className='bg-[url("/images/tcblack.jpg")] py-10 bg-cover bg-center flex items-center justify-between px-6'>
        <div className='container mx-auto md:flex items-center justify-between px-6'>
          <p className='md:px-6 text-white font-bold text-2xl'>Subscribe to our mailing list for updates</p>
          <form className='flex items-center justify-between bg-white mt-4 md:mt-0 mr-6'>
            <input type='email' placeholder='Enter your email' className='bg-transparent border border-white px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary' />
            <button className='bg-primary text-white px-4 py-2 border border-primary'>Subscribe</button>
          </form>
        </div>
    </div>
  )
}
