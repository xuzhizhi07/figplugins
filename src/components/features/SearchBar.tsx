import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="搜索插件..."
        className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
} 