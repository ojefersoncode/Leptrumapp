'use client';

import { useState } from 'react';
import { SearchBar } from '../SearchComponents/SearchBar';
import { ProductCard } from '../SearchComponents/ProductCard';
import { products as allProducts } from '../SearchComponents/mockProducts';
import Navbar from '../HomeComponents/Navbar';
import { Footer } from '../landing/Footer';
import { Truck } from 'lucide-react';

export function SearchPage() {
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    gender: ''
  });

  const filteredProducts = allProducts.filter((p) => {
    return (
      (filters.keyword === '' ||
        p.name.toLowerCase().includes(filters.keyword.toLowerCase())) &&
      (filters.category === '' || p.category === filters.category) &&
      (filters.gender === '' || p.gender === filters.gender)
    );
  });

  return (
    <div className="w-full mx-auto bg-slate-200">
      <div className="flex justify-center items-center w-full bg-red-700 hover:bg-red-600 transition-all duration-200 p-3">
        <div className="flex items-center text-sm max-sm:text-xs font-semibold text-white">
          <Truck className="size-6 max-sm:size-5 mr-2" /> Frete grátis para
          minas gerais
        </div>
      </div>
      <Navbar />
      <div className="p-7 bg-slate-200">
        <div className="pt-5">
          <SearchBar onFilterChange={setFilters} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7 bg-slate-200">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
