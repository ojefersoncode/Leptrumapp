"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CreateStore = () => {
  const router = useRouter();
  const [storeName, SetstoreName] = useState("");
  const [storeUrl, SetstoreUrl] = useState("");
  const [categoria, setCategoria] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [alertMessage, setAlertMessage] = useState("");

  const uploadImage = async (file: File | null) => {
    if (!file) return null;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from("storeLogos")
      .upload(filePath, file);

    if (error) {
      setAlertMessage("Erro ao fazer upload da imagem.");
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("storeLogos")
      .getPublicUrl(filePath);
    return publicUrlData?.publicUrl || null;
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!storeName || !storeUrl || !categoria) {
      setAlertMessage("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const imageUrl = logo ? await uploadImage(logo) : "";
      const { data, error } = await supabase.from("stores").insert([
        {
          storeName,
          storeUrl,
          storeCategoria: categoria,
          storeImage: imageUrl,
        },
      ]);

      if (error) {
        setAlertMessage("Erro ao inserir dados no banco.");
        return;
      }

      router.push("/create-store-final");
    } catch (error) {
      setAlertMessage("Erro inesperado ao processar a solicitação.");
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
          <h2 className="text-2xl font-bold">Crie sua loja</h2>
          <p className="text-sm text-slate-600">
            Alcance novos clientes e organize seus produtos.
          </p>
        </CardHeader>
        <CardContent>
          {alertMessage && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nomedaloja">Nome da loja</Label>
              <Input
                id="nomedaloja"
                type="text"
                value={storeName}
                onChange={(e) => SetstoreName(e.target.value)}
                placeholder="Leptrum store"
              />
            </div>

            <div>
              <Label htmlFor="urldaloja">Url da loja</Label>
              <Input
                id="urldaloja"
                type="text"
                value={storeUrl}
                onChange={(e) => SetstoreUrl(e.target.value)}
                placeholder="leptrum.com/nome-da-sua-loja"
              />
            </div>

            <div>
              <Label htmlFor="categoria">Categoria</Label>
              <Input
                id="categoria"
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                placeholder="Moda"
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
