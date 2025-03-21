import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figma 插件展示平台",
  description: "一个精心策划的 Figma 插件集合，旨在提升您的设计工作流程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${inter.className} font-['PingFang_SC','MiSans',sans-serif]`}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
} 