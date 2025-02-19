import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leptrum",
  description: "Catálogo de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo/leptrum.png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-gray-900 font-sans antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
