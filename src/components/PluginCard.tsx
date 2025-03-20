'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tag } from 'lucide-react'
import PluginModal from './PluginModal'

interface Plugin {
  id: string
  name: string
  description: string
  shortDescription: string
  thumbnail: string
  logo: string
  isPaid: boolean
  category: string
  rating: number
  createdAt: Date
  updatedAt: Date
}

interface PluginCardProps {
  plugin: Plugin
}

export default function PluginCard({ plugin }: PluginCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div 
        className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48">
          <Image
            src={plugin.thumbnail}
            alt={plugin.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs ${
              plugin.isPaid ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
            }`}>
              {plugin.isPaid ? '付费' : '免费'}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-4">
            <Image
              src={plugin.logo}
              alt={plugin.name}
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{plugin.name}</h3>
              <p className="text-sm text-gray-600">{plugin.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <PluginModal
        plugin={plugin}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
} 