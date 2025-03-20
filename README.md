# Figma 插件展示平台

一个精心策划的 Figma 插件集合，旨在提升您的设计工作流程。

## 项目概述

本网站作为 Figma 插件的综合目录，帮助设计师发现和学习能够改进其设计流程的工具。

## 核心功能

### 1. 插件目录
- 分类展示 Figma 插件
- 搜索功能
- 按类别、付费筛选
- 详细的插件信息，包括：
  - 插件名称
  - 插件logo图片
  - 缩略图
  - 简单描述
  - 详细描述
  - 是否付费
  - 分类
 



## 技术栈

- **前端**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **数据库**: PostgreSQL
- **认证**: NextAuth.js
- **ORM**: Prisma
- **部署**: Vercel

## 项目结构

```
src/
├── app/                 # App Router 页面
├── components/          # React 组件
│   ├── ui/             # UI 组件
│   ├── layout/         # 布局组件
│   └── features/       # 功能组件
├── lib/                # 工具函数
├── hooks/              # 自定义 React Hooks
├── types/              # TypeScript 类型
└── styles/             # 全局样式
```

## 开发路线图

### 第一阶段：MVP
- [ ] 基础插件目录
- [ ] 搜索和筛选
- [ ] 插件详情页


## 开始使用

1. 克隆仓库
2. 安装依赖：
   ```bash
   npm install
   ```
3. 设置环境变量：
   ```bash
   cp .env.example .env.local
   ```
4. 运行开发服务器：
   ```bash
   npm run dev
   ```

## 贡献

欢迎贡献！请阅读我们的[贡献指南](CONTRIBUTING.md)了解详情。

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。 