"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/router"; // Importando o useRouter do Next.js
import supabase from "@/lib/supabase"; // Importando o cliente Supabase

const CreateStore = () => {
    const router = useRouter(); // Hook do Next.js para navegação
    const [nomeLoja, setNomeLoja] = useState("");
    const [urlLoja, setUrlLoja] = useState("");
    const [categoria, setCategoria] = useState("");
    const [logo, setLogo] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Enviar dados para o Supabase
        try {
            const { data, error } = await supabase
                .from("lojas") // Substitua por sua tabela no Supabase
                .insert([
                    {
                        nome: nomeLoja,
                        url: urlLoja,
                        categoria: categoria,
                        logo: logo ? URL.createObjectURL(logo) : "", // Enviar logo se existir
                    },
                ]);

            if (error) throw error;

            console.log("Dados enviados com sucesso:", data);

            // Redirecionar para a página create-store-final
            router.push("/create-store-final");
        } catch (error) {
            console.error("Erro ao enviar dados para o Supabase:", error);
            alert("Ocorreu um erro ao enviar os dados.");
        }
    };

    return (
        <div className="flex items-center min-h-screen justify-center content-center">
            <Card className="w-full max-w-md p-4">
                <CardHeader className="text-center">
                    <h2 className="text-2xl font-bold">Crie sua loja</h2>
                    <p className="text-sm text-slate-600">Alcance novos clientes e organize seus produtos..</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="nomedaloja" className="block text-sm mb-2 font-medium text-slate-800">
                                Nome da loja
                            </label>
                            <Input
                                id="nomedaloja"
                                type="text"
                                value={nomeLoja}
                                onChange={(e) => setNomeLoja(e.target.value)}
                                placeholder="Leptrum store"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label htmlFor="urldaloja" className="block text-sm mb-2 font-medium text-slate-800">
                                Url da loja
                            </label>
                            <Input
                                id="urldaloja"
                                type="text"
                                value={urlLoja}
                                onChange={(e) => setUrlLoja(e.target.value)}
                                placeholder="leptrum.com/nome-da-sua-loja"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label htmlFor="categoria" className="block text-sm mb-2 font-medium text-slate-800">
                                Categoria
                            </label>
                            <Input
                                id="categoria"
                                type="text"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                placeholder="Moda"
                                className="mt-1"
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Logo da loja</Label>
                            <Input
                                id="picture"
                                type="file"
                                onChange={(e) => setLogo(e.target.files[0])}
                            />
                        </div>
                        <Button type="submit" className="w-full bg-indigo-700 mt-4">
                            Próximo passo
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateStore;
