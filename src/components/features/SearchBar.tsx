'use client'

import Image from 'next/image'
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-center transition-all duration-300">
      <div className="relative w-full max-w-xl">
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <Image
            src="/search.png"
            alt="搜索"
            width={20}
            height={20}
          />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="搜索"
          className="w-full px-6 py-3 pl-14 text-gray-900 border border-black rounded-full bg-[#F6F3EE] placeholder:text-[#A4A4A6] text-sm placeholder:text-sm focus:outline-none"
        />
      </div>
    </div>
  );
} 