import { useState } from "react";

interface FilterBarProps {
  onFilter: (category: string, price: string) => void;
}

export function FilterBar({ onFilter }: FilterBarProps) {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleCategoryClick = (value: string) => {
    const newValue = category === value ? "" : value;
    setCategory(newValue);
    onFilter(newValue, price);
  };

  const handlePriceClick = (value: string) => {
    const newValue = price === value ? "" : value;
    setPrice(newValue);
    onFilter(category, newValue);
  };

  return (
    <div className="space-y-4">
      {/* 价格筛选 */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => handlePriceClick("")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            price === "" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          全部
        </button>
        <button
          onClick={() => handlePriceClick("free")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            price === "free" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          免费
        </button>
        <button
          onClick={() => handlePriceClick("paid")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            price === "paid" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          付费
        </button>
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => handleCategoryClick("")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            category === "" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          全部
        </button>
        <button
          onClick={() => handleCategoryClick("AI")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            category === "AI" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          AI
        </button>
        <button
          onClick={() => handleCategoryClick("字体")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            category === "字体" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          字体
        </button>
        <button
          onClick={() => handleCategoryClick("颜色")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            category === "颜色" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          颜色
        </button>
        <button
          onClick={() => handleCategoryClick("协作工具")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            category === "协作工具" 
              ? "bg-black text-white" 
              : "bg-[#EBE9E4] text-black hover:bg-[#E0DEDA]"
          }`}
        >
          协作工具
        </button>
      </div>
    </div>
  );
} 