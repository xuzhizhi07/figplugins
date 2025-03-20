import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const plugins = [
    {
      name: "Figma to HTML",
      description: "将 Figma 设计转换为 HTML 和 CSS 代码，支持响应式布局和组件导出。",
      shortDescription: "Figma 设计转 HTML 代码",
      thumbnail: "https://picsum.photos/800/600?random=1",
      logo: "https://picsum.photos/200/200?random=1",
      isPaid: true,
      category: "导出工具",
      rating: 4.8,
    },
    {
      name: "Auto Layout Pro",
      description: "智能布局工具，自动调整元素间距和对齐方式，提高设计效率。",
      shortDescription: "智能布局工具",
      thumbnail: "https://picsum.photos/800/600?random=2",
      logo: "https://picsum.photos/200/200?random=2",
      isPaid: false,
      category: "设计工具",
      rating: 4.6,
    },
    {
      name: "Icon Library",
      description: "包含数千个高质量图标的库，支持自定义颜色和大小。",
      shortDescription: "图标库",
      thumbnail: "https://picsum.photos/800/600?random=3",
      logo: "https://picsum.photos/200/200?random=3",
      isPaid: false,
      category: "资源库",
      rating: 4.9,
    },
    {
      name: "Prototype Master",
      description: "强大的原型设计工具，支持复杂的交互动画和状态管理。",
      shortDescription: "原型设计工具",
      thumbnail: "https://picsum.photos/800/600?random=4",
      logo: "https://picsum.photos/200/200?random=4",
      isPaid: true,
      category: "原型设计",
      rating: 4.7,
    },
  ]

  for (const plugin of plugins) {
    await prisma.plugin.create({
      data: plugin,
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 