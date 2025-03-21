'use client'

import { useState } from 'react'
import Image from 'next/image'
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
        className="bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow cursor-pointer p-6"
        onClick={() => setIsModalOpen(true)}
      >
        {/* 分类 */}
        <div>
          <span className="inline-flex px-3 py-1 text-sm border border-gray-200 text-gray-900 rounded-full">
            # {plugin.category}
          </span>
        </div>

        {/* 缩略图 */}
        <div className="relative w-full aspect-[2/1] mt-4 mb-4">
          <Image
            src={plugin.thumbnail}
            alt={plugin.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* 插件信息 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden">
            <Image
              src={plugin.logo}
              alt={plugin.name}
              width={40}
              height={40}
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{plugin.name}</h3>
            <p className="text-sm text-gray-600">{plugin.shortDescription}</p>
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