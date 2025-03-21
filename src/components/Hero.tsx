'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#F6F3EE]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/hero.png"
            alt="FigPlugins Hero"
            width={1200}
            height={400}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  )
} 