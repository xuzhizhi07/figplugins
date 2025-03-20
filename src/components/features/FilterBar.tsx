import { Tag, DollarSign } from "lucide-react";

export function FilterBar() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Tag className="h-4 w-4 text-gray-500" />
        <select className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">所有分类</option>
          <option value="design">设计工具</option>
          <option value="prototype">原型设计</option>
          <option value="export">导出工具</option>
        </select>
      </div>
      
      <div className="flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-gray-500" />
        <select className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">所有价格</option>
          <option value="free">免费</option>
          <option value="paid">付费</option>
        </select>
      </div>
    </div>
  );
} 