"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const CreateStore = () => {
    const router = useRouter();
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const user = supabase.auth.Users();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            // Inserir dados na tabela "storeaddress"
            const { data, error } = await supabase.from("storeaddress").insert([
                {
                    cep: cep,
                    cidade: cidade,
                    estado: estado,
                    rua: rua,
                    numero: numero,
                },
            ]);

            if (error) {
                console.error("Erro ao inserir dados:", error);
                alert("Erro ao salvar os dados.");
            } else {
                console.log("Dados inseridos com sucesso:", data);
                router.push("/home"); // Redirecionar após sucesso
            }
        } catch (error) {
            console.error("Erro ao enviar dados para o Supabase:", error);
            alert("Ocorreu um erro ao salvar os dados.");
        }
    };

    return (
        <div className="flex items-center min-h-screen justify-center content-center">
            <Card className="w-full max-w-md p-4">
                <CardHeader className="text-center">
                    <h2 className="text-2xl font-bold">Adicionar endereço da loja</h2>
                    <p className="text-sm text-slate-600">
                        Preencha os detalhes do endereço da loja.
                    </p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="cep" className="block text-sm mb-2 font-medium text-slate-800">
                                CEP
                            </label>
                            <Input
                                id="cep"
                                type="text"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                placeholder="00000-000"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label htmlFor="cidade" className="block text-sm mb-2 font-medium text-slate-800">
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
                            <label htmlFor="estado" className="block text-sm mb-2 font-medium text-slate-800">
                                Estado
                            </label>
                            <Input
                                id="estado"
                                type="text"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                placeholder="SP"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label htmlFor="rua" className="block text-sm mb-2 font-medium text-slate-800">
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
                            <label htmlFor="numero" className="block text-sm mb-2 font-medium text-slate-800">
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
