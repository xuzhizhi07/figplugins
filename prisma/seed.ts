import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const plugins = [
    {
      name: "ARC",
      description: "ARC 插件描述",
      shortDescription: "ARC 简短描述",
      thumbnail: "/plugins/thumbnails/ARC.png",
      logo: "/plugins/logos/ARC.png",
      isPaid: true,
      category: "设计工具",
      rating: 4.8,
    },
    {
      name: "Codia",
      description: "Codia 插件描述",
      shortDescription: "Codia 简短描述",
      thumbnail: "/plugins/thumbnails/codia.png",
      logo: "/plugins/logos/codia.png",
      isPaid: false,
      category: "开发工具",
      rating: 4.6,
    },
    {
      name: "Oblique",
      description: "Oblique 插件描述",
      shortDescription: "Oblique 简短描述",
      thumbnail: "/plugins/thumbnails/oblique.png",
      logo: "/plugins/logos/oblique.png",
      isPaid: true,
      category: "设计工具",
      rating: 4.9,
    }
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