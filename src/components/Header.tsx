'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F3EE]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="FigPlugins Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-bold">FigPlugins</span>
          </Link>
        </div>
      </div>
    </header>
  )
} 