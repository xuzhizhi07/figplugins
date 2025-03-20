'use client'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            © 2024 FigPlugins. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              关于我们
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              使用条款
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              隐私政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 