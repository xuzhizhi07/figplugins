'use client'

import Image from 'next/image'
import { SearchBar } from './features/SearchBar'
import { useEffect, useRef, useState } from 'react'

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [showHeaderSearch, setShowHeaderSearch] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!searchBarRef.current) return;
      
      const searchBarRect = searchBarRef.current.getBoundingClientRect();
      const headerHeight = 64; // 16 * 4 = 64px (h-16)
      
      if (searchBarRect.top <= headerHeight) {
        setShowHeaderSearch(true);
      } else {
        setShowHeaderSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showHeaderSearch && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#F6F3EE] border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center h-16">
              <div className="flex items-center w-48">
                <Image
                  src="/logo.png"
                  alt="FigPlugins Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-xl font-bold">FigPlugins</span>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md">
                  <SearchBar onSearch={onSearch} />
                </div>
              </div>
              <div className="w-48"></div>
            </div>
          </div>
        </div>
      )}
      <section className="bg-[#F6F3EE] pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <Image
              src="/hero.png"
              alt="FigPlugins Hero"
              width={1600}
              height={600}
              className="w-full"
              priority
            />
            <div ref={searchBarRef} className={`absolute bottom-8 left-0 right-0 transition-opacity duration-300 ${showHeaderSearch ? 'opacity-0' : 'opacity-100'}`}>
              <SearchBar onSearch={onSearch} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 