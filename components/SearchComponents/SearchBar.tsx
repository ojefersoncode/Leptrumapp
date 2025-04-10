import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useState, useEffect } from 'react';

type Filters = {
  keyword: string;
  category: string;
  gender: string;
};

type Props = {
  onFilterChange: (filters: Filters) => void;
};

export function SearchBar({ onFilterChange }: Props) {
  const [localFilters, setLocalFilters] = useState<Filters>({
    keyword: '',
    category: '',
    gender: ''
  });

  useEffect(() => {
    onFilterChange(localFilters);
  }, [localFilters]);

  const handleChange = (field: keyof Filters, value: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:gap-4 items-center w-full">
      <Input
        placeholder="Buscar por produto..."
        onChange={(e) => handleChange('keyword', e.target.value)}
        className="w-full md:w-1/2 p-5"
      />
      <div className="flex max-md:w-full max-md:flex-col max-md:pt-4 items-center gap-4">
        <Select onValueChange={(value) => handleChange('category', value)}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Roupas">Roupas</SelectItem>
            <SelectItem value="Calçados">Calçados</SelectItem>
            <SelectItem value="Acessórios">Acessórios</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleChange('gender', value)}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Gênero" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Masculino">Masculino</SelectItem>
            <SelectItem value="Feminino">Feminino</SelectItem>
            <SelectItem value="Unissex">Unissex</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
