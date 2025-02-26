// pages/api/auth/set-cookie.ts
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ error: "Token não fornecido" });
    }

    try {
      // Definindo o cookie
      setCookie({ res }, "token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 dias
        path: "/",
        httpOnly: true, // Para garantir que o cookie seja acessível apenas via HTTP
        secure: process.env.NODE_ENV === "production", // Só usar em HTTPS em produção
      });

      return res.status(200).json({ message: "Cookie setado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao definir cookie" });
    }
  } else {
    return res.status(404).json({ error: "Método não permitido" });
  }
}
