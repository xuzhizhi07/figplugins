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
          <div>
            <h3 className="font-semibold">{plugin.name}</h3>
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