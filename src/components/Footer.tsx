'use client'

import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  weight: '300',
})

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className={`text-center text-gray-300 text-sm ${rubik.className}`}>
          Copyright © 2025 FigPlugins Created by Ciel
        </div>
      </div>
    </footer>
  )
} 