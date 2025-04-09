import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export function SelectAula() {
  // Definindo os dados como uma constante
  const aulas = [
    { id: 'aula1', label: 'Aula 1 - Introdução ao Supabase' },
    { id: 'aula2', label: 'Aula 2 - Configuração do Banco de Dados' },
    { id: 'aula3', label: 'Aula 3 - Autenticação de Usuários' },
    { id: 'aula4', label: 'Aula 4 - Storage e Upload de Arquivos' },
    { id: 'aula5', label: 'Aula 5 - Implementando API REST' }
  ];

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecionar aula" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>

          {aulas.map((aula) => (
            <SelectItem key={aula.id} value={aula.id}>
              {aula.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
