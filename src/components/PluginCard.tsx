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
        className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center gap-4">
          <Image
            src={plugin.logo}
            alt={plugin.name}
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{plugin.name}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                plugin.isPaid ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {plugin.isPaid ? '付费' : '免费'}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{plugin.shortDescription}</p>
            <div className="flex items-center gap-2">
              <Tag size={14} className="text-gray-500" />
              <span className="text-xs text-gray-500">{plugin.category}</span>
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