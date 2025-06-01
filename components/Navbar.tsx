'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-700 text-white">
      <nav className="border-b border-gray-600 sticky">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <Image src="/images/aealimited.svg" alt="logo" width={100} height={50} />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About Us</Link>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <Link href="/case-studies" className="hover:text-primary">Case Studies</Link>
            <Link href="/news" className="hover:text-primary">News</Link>
            <Link
              href="/contact"
              className="bg-primary px-4 py-2 flex items-center gap-2 rounded hover:bg-primary/90 transition"
            >
              Contacts <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <XIcon className="w-8 h-8 text-white" />
              ) : (
                <MenuIcon className="w-8 h-8 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
            <Link href="/" onClick={closeMenu} className="block hover:text-primary">Home</Link>
            <Link href="/about" onClick={closeMenu} className="block hover:text-primary">About Us</Link>
            <Link href="/services" onClick={closeMenu} className="block hover:text-primary">Services</Link>
            <Link href="/case-studies" onClick={closeMenu} className="block hover:text-primary">Case Studies</Link>
            <Link href="/news" onClick={closeMenu} className="block hover:text-primary">News</Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block bg-primary px-4 py-2 flex items-center gap-2 rounded hover:bg-primary/90 transition"
            >
              Contacts <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
