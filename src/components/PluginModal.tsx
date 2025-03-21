'use client'

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
    <div className="fixed inset-0 bg-[#F5F3EB] flex items-center justify-center z-50">
      <div className="bg-white rounded-[66px] p-16 max-w-4xl w-full mx-4 relative">
        {/* 免费标签 */}
        {!plugin.isPaid && (
          <div className="absolute -top-1 left-16 w-16">
            <div className="bg-green-500 text-white text-center py-2 px-3 rounded-b-lg shadow-md">
              免费
            </div>
          </div>
        )}

        {/* 头部：logo + 名称 + 关闭按钮 */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-center gap-6">
            <Image
              src={plugin.logo}
              alt={plugin.name}
              width={96}
              height={96}
              className="rounded-2xl"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2">{plugin.name}</h2>
              <p className="text-gray-600 text-lg">{plugin.shortDescription}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* 付费状态 + 标签 */}
        <div className="flex items-center gap-8 my-8">
          {plugin.isPaid && (
            <span className="px-4 py-2 rounded-full text-base bg-yellow-100 text-yellow-800">
              付费
            </span>
          )}
          <div className="flex gap-2 items-center">
            <Tag size={20} className="text-gray-500" />
            <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-base">
              {plugin.category}
            </span>
          </div>
          <a
            href={`https://www.figma.com/community/plugin/${plugin.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto bg-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            链接直达 <span className="text-lg">→</span>
          </a>
        </div>

        {/* 详细描述 */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">详细描述</h3>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
            {plugin.description}
          </p>
        </div>
      </div>
    </div>
  )
} 