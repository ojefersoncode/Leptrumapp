'use client';

import { useState } from 'react';
import { SearchBar } from '../SearchComponents/SearchBar';
import { ProductCard } from '../SearchComponents/ProductCard';
import { products as allProducts } from '../SearchComponents/mockProducts';
import Navbar from '../HomeComponents/Navbar';
import { Footer } from '../landing/Footer';

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
    <div className="w-full mx-auto bg-slate-200 h-screen">
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
