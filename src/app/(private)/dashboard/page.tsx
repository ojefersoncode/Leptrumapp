// dashboard/[id]/page.tsx
"use server";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams, useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const params = useParams(); // Obtém os parâmetros da URL
  const router = useRouter();

  const userIdFromUrl = params.id; // Obtém o ID da URL

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Erro ao buscar usuário:", error);
        router.push("/login"); // Redireciona para /login se houver erro
        return;
      }

      setUser(data?.user);

      // Verifique se o ID da URL corresponde ao ID do usuário logado
      if (userIdFromUrl !== data.user?.id) {
        router.push("/login"); // Redireciona para /login se os IDs não coincidirem
      }
    }

    fetchUser();
  }, [router, userIdFromUrl]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user.email}!</p>
      <p>Seu ID: {user.id}</p>
    </div>
  );
}