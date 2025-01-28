"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const CreateStore = () => {
    const router = useRouter();
    const [storeName, SetstoreName] = useState("");
    const [storeUrl, SetstoreUrl] = useState("");
    const [categoria, setCategoria] = useState("");
    const [logo, setLogo] = useState<File | null>(null);

    type SupabaseStorageResponse = {
        data: { publicUrl: string };
        error?: any; // Tornando 'error' opcional
    };

    const uploadImage = async (file: File | null) => {
        if (!file) return null;

        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        // Upload da imagem para o Supabase Storage
        const { data, error } = await supabase.storage
            .from("storeLogos")
            .upload(filePath, file);

        if (error) {
            console.error("Erro ao fazer upload:", error.message || error);
            return null;
        }

        // Obter a URL pública
        const { data: publicUrlData, error: urlError }: SupabaseStorageResponse = supabase
            .storage
            .from("storeLogos")
            .getPublicUrl(filePath);

        if (urlError) {
            console.error("Erro ao obter a URL pública:", urlError.message || urlError);
            return null;
        }

        return publicUrlData?.publicUrl || null;
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        try {
            // Enviar a imagem
            const imageUrl = logo ? await uploadImage(logo) : "";

            // Enviar os dados para a  tabela "stores"
            const { data, error } = await supabase
                .from("stores")
                .insert([
                    {
                        storeName: storeName,
                        storeUrl: storeUrl,
                        storeCategoria: categoria,
                        storeImage: imageUrl || "",
                    },
                ]);

            if (error) {
                console.error("Erro ao inserir dados:", error);
                alert("Erro ao enviar os dados.");
            } else {
                console.log("Dados inseridos com sucesso:", data);
            }


            console.log("Dados enviados com sucesso:", data);
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
                    <p className="text-sm text-slate-600">Alcance novos clientes e organize seus produtos.</p>
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
                                value={storeName}
                                onChange={(e) => SetstoreName(e.target.value)}
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
                                value={storeUrl}
                                onChange={(e) => SetstoreUrl(e.target.value)}
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
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) setLogo(file);
                                }}
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
