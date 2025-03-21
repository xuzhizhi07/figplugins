'use client';

import PluginCard from "@/components/PluginCard";
import { SearchBar } from "@/components/features/SearchBar";
import { FilterBar } from "@/components/features/FilterBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { prisma } from "@/lib/prisma";

export default function Home() {
  const [plugins, setPlugins] = useState([]);
  const [filteredPlugins, setFilteredPlugins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  useEffect(() => {
    const fetchPlugins = async () => {
      const response = await fetch('/api/plugins');
      const data = await response.json();
      console.log('API Response:', data);
      console.log('Number of plugins:', data.length);
      console.log('Plugin IDs:', data.map((p: any) => p.id));
      setPlugins(data);
      setFilteredPlugins(data);
    };
    fetchPlugins();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, currentCategory, currentPrice);
  };

  const handleFilter = (category: string, price: string) => {
    setCurrentCategory(category);
    setCurrentPrice(price);
    applyFilters(searchQuery, category, price);
  };

  const applyFilters = (query: string, category: string, price: string) => {
    let filtered = [...plugins];
    console.log('Applying filters to plugins:', filtered.length);

    // 应用搜索过滤
    if (query.trim()) {
      filtered = filtered.filter((plugin: any) => 
        plugin.name.toLowerCase().includes(query.toLowerCase()) ||
        plugin.description.toLowerCase().includes(query.toLowerCase()) ||
        plugin.shortDescription.toLowerCase().includes(query.toLowerCase())
      );
    }

    // 应用分类过滤
    if (category) {
      filtered = filtered.filter((plugin: any) => 
        plugin.category === category
      );
    }

    // 应用价格过滤
    if (price) {
      filtered = filtered.filter((plugin: any) => 
        price === 'free' ? !plugin.isPaid : plugin.isPaid
      );
    }

    console.log('Filtered plugins count:', filtered.length);
    console.log('Filtered plugin IDs:', filtered.map((p: any) => p.id));
    setFilteredPlugins(filtered);
  };

  return (
    <div className="min-h-screen bg-[#F6F3EE] flex flex-col">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mb-8">
          <FilterBar onFilter={handleFilter} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlugins.map((plugin: any) => {
            console.log('Rendering plugin:', plugin);
            return (
              <PluginCard
                key={plugin.id}
                plugin={plugin}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
} 