'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Newsletter = () => {
  const [whatsapp, setWhatsapp] = useState('');

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 7)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 11)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;

    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPhone(input);
    setWhatsapp(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleaned = whatsapp.replace(/\D/g, '');
    if (cleaned.length < 10) {
      alert('Por favor, insira um número de WhatsApp válido com DDD.');
      return;
    }

    console.log('Número de WhatsApp cadastrado:', cleaned);
    // Aqui você pode enviar esse número para sua API ou serviço
  };

  return (
    <section id="newsletter">
      <div className="container py-4 bg-black">
        <div className="">
          <div className="px-4">
            <p className="text-2xl max-sm:text-lg text-white text-center mt-4 mb-7 text-slate-900">
              Receba as melhores ofertas e novidades direto no seu WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
            >
              <Input
                placeholder="(11) 91234-5678"
                className="bg-slate-100 py-4"
                type="tel"
                value={whatsapp}
                onChange={handleChange}
                required
              />
              <Button
                variant="ghost"
                className="w-full bg-green-600 text-white hover:text-white/80 hover:bg-green-600/80"
                type="submit"
              >
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
