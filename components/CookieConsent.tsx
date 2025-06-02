'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
// import Link from 'next/link'
import { CookieIcon } from 'lucide-react'

export function CookiesConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookies-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookies-consent', 'accepted')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 w-full max-w-sm bottom-4 left-4"
        >
          <Card className="p-4 bg-white border shadow-xl rounded-xl dark:bg-gray-900">
            <div className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                <CookieIcon/>
                <p className='text-xl font-bold text-primary'>This Website Uses Cookies</p>
              We use cookies and similar technologies to improve your experience on our website, analyze site traffic, and serve personalized content. By continuing to use our site, or by clicking “Accept All Cookies,” you consent to our use of cookies.
            </div>
            <div className="flex justify-end">
              <Button size="sm" onClick={handleAccept} className='w-full text-white bg-primary hover:bg-green-800'>
                Accept
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
