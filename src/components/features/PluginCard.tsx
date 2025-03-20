import Image from "next/image";

interface PluginCardProps {
  name: string;
  description: string;
  thumbnail: string;
  logo: string;
  isPaid: boolean;
  category: string;
}

export function PluginCard({ name, description, thumbnail, logo, isPaid, category }: PluginCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs rounded-full ${
            isPaid ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
          }`}>
            {isPaid ? "付费" : "免费"}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative w-8 h-8">
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{category}</span>
        </div>
      </div>
    </div>
  );
} 