import Image from 'next/image'
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

interface PluginModalProps {
  plugin: Plugin
  isOpen: boolean
  onClose: () => void
}

export default function PluginModal({ plugin, isOpen, onClose }: PluginModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        {/* 头部：logo + 名称 + 关闭按钮 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <Image
              src={plugin.logo}
              alt={plugin.name}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-bold">{plugin.name}</h2>
              <p className="text-gray-600 mt-1">{plugin.shortDescription}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* 付费状态 + 标签 */}
        <div className="flex items-center gap-4 my-4">
          <span className={`px-3 py-1 rounded-full text-sm ${
            plugin.isPaid ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
          }`}>
            {plugin.isPaid ? '付费' : '免费'}
          </span>
          
          <div className="flex gap-2 items-center">
            <Tag size={16} className="text-gray-500" />
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm">
              {plugin.category}
            </span>
          </div>
        </div>

        {/* 详细描述 */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">详细描述</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{plugin.description}</p>
        </div>
      </div>
    </div>
  )
} 