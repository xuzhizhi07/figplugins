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
      <div className="bg-white rounded-[66px] p-16 max-w-4xl w-full mx-4 relative min-h-[calc(100vh-90px)] flex flex-col">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute -right-12 -top-8 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/close.png"
            alt="关闭"
            width={46}
            height={46}
          />
        </button>

        {/* 免费/付费标签 */}
        <div className="absolute right-16 -top-1 w-16 z-10">
          <Image
            src={plugin.isPaid ? "/pay.png" : "/free.png"}
            alt={plugin.isPaid ? "付费" : "免费"}
            width={64}
            height={120}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-8">
          {/* 分类标签 */}
          <div className="-mt-8">
            <span className="px-4 py-1.5 bg-white border border-[#E5E5E5] text-[13px] rounded-full">
              # {plugin.category}
            </span>
          </div>

          {/* 头部：logo + 名称 + 链接直达按钮 */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <Image
                src={plugin.logo}
                alt={plugin.name}
                width={60}
                height={60}
                className="rounded-2xl"
              />
              <div>
                <h2 className="text-[15px] font-bold mb-1">{plugin.name}</h2>
                <p className="text-[#747474] text-[13px]">{plugin.shortDescription}</p>
              </div>
            </div>
            <a
              href={`https://www.figma.com/community/plugin/${plugin.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-4 rounded-full text-[14px] font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              链接直达 
              <Image 
                src="/link.png" 
                alt="链接" 
                width={12} 
                height={12} 
                className="ml-1"
              />
            </a>
          </div>

          {/* 详细描述 */}
          <div className="flex-grow">
            <p className="text-gray-700 text-[14px] leading-relaxed whitespace-pre-wrap">
              {plugin.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 