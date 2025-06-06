import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Truck } from 'lucide-react';

export function CalcFrete() {
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const calcularFrete = async () => {
    if (!cep || cep.length < 8) {
      setFrete('CEP inválido.');
      return;
    }

    setLoading(true);
    setFrete(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setFrete('CEP não encontrado.');
      } else if (data.uf === 'MG') {
        setFrete('Frete grátis para Minas Gerais!');
      } else {
        setFrete('Frete: R$ 19,90');
      }
    } catch (error) {
      setFrete('Erro ao consultar o CEP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl w-full space-y-4">
      <div className="flex flex-col justify-center w-full">
        <div className="space-y-2">
          <Label htmlFor="cep"> Calcule o frete para sua região :</Label>
          <Input
            id="cep"
            className="p-5 bg-white"
            placeholder="30140-010"
            value={cep}
            maxLength={9}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          />
        </div>
        <Button
          variant={'ghost'}
          onClick={calcularFrete}
          disabled={loading}
          className="w-full text-white font-semibold p-5 mt-4 transition-all bg-black hover:text-white/80 hover:bg-black/95 text-base rounded-lg"
        >
          {loading ? 'Calculando...' : 'Calcular Frete'}
        </Button>
        {frete && (
          <>
            {frete.includes('grátis') ? (
              <div className="flex w-full justify-center items-center mt-7 border border-slate-900 cursor-pointer select-none rounded-md bg-slate-100">
                <span className="flex gap-2 text-slate-900 p-5">
                  <Truck />
                  {frete}
                </span>
              </div>
            ) : (
              <div className="text-center font-semibold text-red-600 p-2 border bg-white rounded-md">
                {frete}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
