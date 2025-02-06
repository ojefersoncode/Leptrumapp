import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  console.log("🔹 Middleware iniciado");

  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Obtém a sessão do usuário
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    console.log("⚠️ Erro na autenticação ou usuário não encontrado!", error);
    return NextResponse.redirect(new URL("/login?unauthenticated=true", req.url));
  }

  console.log("✅ Usuário autenticado!", user);
  return res;
}

export const config = {
  matcher: ["/dashboard/:path*", "/home/:path*"],
};
