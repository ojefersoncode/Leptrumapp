"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const AddressForm = () => {
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [rua, setRua] = useState("");

    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCep(e.target.value);
    };

    const fetchAddress = async () => {
        if (!/^\d{8}$/.test(cep)) {
            alert("Por favor, digite um CEP válido com 8 dígitos.");
            return;
        }
    
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            
            if (!response.ok) {
                console.error("Erro na API ViaCEP:", response.statusText);
                alert("Erro ao conectar com a API. Tente novamente mais tarde.");
                return;
            }
    
            const data = await response.json();
    
            if (data.erro) {
                alert("CEP não encontrado.");
            } else {
                setCidade(data.localidade);
                setEstado(data.uf);
                setRua(data.logradouro);
            }
        } catch (error) {
            console.error("Erro ao buscar o endereço:", error);
            alert("Endereço não encontrado.");
        }
    };
    
    

    return (
        <div className="flex items-center min-h-screen justify-center content-center">
            <Card className="w-full max-w-md p-4">
                <CardHeader className="text-center">
                    <h2 className="text-2xl font-bold">Informações do Endereço</h2>
                    <p className="text-sm text-slate-600">Preencha ou busque o endereço pelo CEP.</p>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="cep" className="block text-sm mb-2 font-medium text-slate-800">
                                CEP
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    id="cep"
                                    type="text"
                                    placeholder="Digite seu CEP"
                                    value={cep}
                                    onChange={handleCepChange}
                                    className="mt-1"
                                />
                                <Button type="button" onClick={fetchAddress} className="bg-indigo-700">
                                    Buscar
                                </Button>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="cidade" className="block text-sm mb-2 font-medium text-slate-800">
                                Cidade
                            </Label>
                            <Input
                                id="cidade"
                                type="text"
                                placeholder="Digite sua cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="estado" className="block text-sm mb-2 font-medium text-slate-800">
                                Estado
                            </Label>
                            <Input
                                id="estado"
                                type="text"
                                placeholder="Digite seu estado"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="rua" className="block text-sm mb-2 font-medium text-slate-800">
                                Rua
                            </Label>
                            <Input
                                id="rua"
                                type="text"
                                placeholder="Digite o nome da sua rua"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="numero" className="block text-sm mb-2 font-medium text-slate-800">
                                Número
                            </Label>
                            <Input
                                id="numero"
                                type="text"
                                placeholder="Digite o número da residência/comércio"
                                className="mt-1"
                            />
                        </div>

                        <Button className="w-full bg-indigo-700 mt-4">Finalizar Cadastro</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddressForm;
