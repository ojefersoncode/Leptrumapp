'use client';

import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

type FilteredResult = {
  id: number;
  title: string;
  category: string;
};

const SearchComponente = () => {
  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto py-4 gap-4 text-slate-900">
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="outline" className="px-3 py-0">
          <Search className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchComponente;
