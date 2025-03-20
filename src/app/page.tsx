import { PluginCard } from "@/components/features/PluginCard";
import { SearchBar } from "@/components/features/SearchBar";
import { FilterBar } from "@/components/features/FilterBar";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const plugins = await prisma.plugin.findMany();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Figma 插件展示平台</h1>
      
      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="mb-8">
        <FilterBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plugins.map((plugin) => (
          <PluginCard
            key={plugin.id}
            name={plugin.name}
            description={plugin.shortDescription}
            thumbnail={plugin.thumbnail}
            logo={plugin.logo}
            isPaid={plugin.isPaid}
            category={plugin.category}
          />
        ))}
      </div>
    </div>
  );
} 