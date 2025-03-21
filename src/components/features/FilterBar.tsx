import { Tag, DollarSign } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
  onFilter: (category: string, price: string) => void;
}

export function FilterBar({ onFilter }: FilterBarProps) {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    onFilter(value, price);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPrice(value);
    onFilter(category, value);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Tag className="h-4 w-4 text-gray-500" />
        <select 
          value={category}
          onChange={handleCategoryChange}
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">所有分类</option>
          <option value="设计工具">设计工具</option>
          <option value="开发工具">开发工具</option>
        </select>
      </div>
      
      <div className="flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-gray-500" />
        <select 
          value={price}
          onChange={handlePriceChange}
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">所有价格</option>
          <option value="free">免费</option>
          <option value="paid">付费</option>
        </select>
      </div>
    </div>
  );
} 