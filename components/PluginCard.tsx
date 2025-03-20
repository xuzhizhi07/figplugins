import { useState } from 'react'
import Image from 'next/image'
import PluginModal from './PluginModal'
import { Tag } from 'lucide-react'

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
            src={`/plugins/logos/${plugin.logo}`}
            alt={plugin.name}
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{plugin.name}</h3>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                {plugin.category}
              </span>
            </div>
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