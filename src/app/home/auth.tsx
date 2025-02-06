"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Session } from "@supabase/supabase-js";

export const useAuth = () => {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Estado para erros

  useEffect(() => {
    const fetchSession = async () => {
      const token = localStorage.getItem("sb:token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Erro ao obter sessão:", error); // Log do erro
          setError(error.message); // Define a mensagem de erro
          // Mesmo com erro, define loading como false para evitar loop infinito
        }

        setSession(session);

      } catch (error) {
        console.error("Erro ao obter sessão (catch):", error);
        setError("Erro ao verificar autenticação."); // Mensagem de erro genérica
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [router]);

  return { session, loading, error }; // Retorna o erro também
};