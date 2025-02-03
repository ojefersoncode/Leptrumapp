"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const CreateStore = () => {
  const router = useRouter();
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [error, setError] = useState("");

  // Função para buscar o endereço pelo CEP
  const buscarEndereco = async (cep: string) => {
    if (cep.length === 8) { // Valida se o CEP tem 8 dígitos
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setError("CEP não encontrado.");
        } else {
          setCidade(data.localidade);
          setEstado(data.uf);
          setRua(data.logradouro);
          setError("");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setError("Erro ao buscar o CEP.");
      }
    }
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!cep || !cidade || !estado || !rua || !numero) {
      setError("Preencha todos os campos.");
      return;
    }

    setError(""); // Limpar erro caso tudo esteja preenchido

    try {
      const { data, error } = await supabase
        .from("storeaddress")
        .insert([{ cep, cidade, estado, rua, numero }]);

      if (error) {
        console.error("Erro ao inserir dados:", error);
        setError("Erro ao salvar os dados.");
      } else {
        console.log("Dados inseridos com sucesso:", data);
        router.push("/home");
      }
    } catch (error) {
      console.error("Erro ao enviar dados para o Supabase:", error);
      setError("Ocorreu um erro ao salvar os dados.");
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center content-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
         bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
      <Card className="w-full max-w-md p-4 relative z-10">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Adicionar endereço da loja</h2>
          <p className="text-sm text-slate-600">
            Preencha os detalhes do endereço da loja.
          </p>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="cep"
                className="block text-sm mb-2 font-medium text-slate-800"
              >
                CEP
              </label>
              <Input
                id="cep"
                type="text"
                value={cep}
                onChange={(e) => {
                  const novoCep = e.target.value.replace(/\D/g, ""); // Remove caracteres
                  setCep(novoCep);
                  if (novoCep.length === 8) buscarEndereco(novoCep);
                }}
                placeholder="00000-000"
                className="mt-1"
                maxLength={8}
              />
            </div>
            <div>
              <label
                htmlFor="cidade"
                className="block text-sm mb-2 font-medium text-slate-800"
              >
                Cidade
              </label>
              <Input
                id="cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="São Paulo"
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="estado"
                className="block text-sm mb-2 font-medium text-slate-800"
              >
                Estado
              </label>
              <Input
                id="estado"
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                placeholder="SP"
                className="mt-1"
                maxLength={2}
              />
            </div>
            <div>
              <label
                htmlFor="rua"
                className="block text-sm mb-2 font-medium text-slate-800"
              >
                Rua
              </label>
              <Input
                id="rua"
                type="text"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                placeholder="Rua Exemplo"
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="numero"
                className="block text-sm mb-2 font-medium text-slate-800"
              >
                Número
              </label>
              <Input
                id="numero"
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="123"
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-700 mt-4">
              Salvar Endereço
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateStore;