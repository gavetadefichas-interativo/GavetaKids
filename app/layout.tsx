import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./tokens.css";
import "./globals.css";

const nunito = localFont({
  src: [
    { path: "./fontes/nunito-latin-700-normal.woff2", weight: "700" },
    { path: "./fontes/nunito-latin-800-normal.woff2", weight: "800" },
    { path: "./fontes/nunito-latin-900-normal.woff2", weight: "900" },
  ],
  variable: "--font-titulos",
  display: "swap",
});

const andika = localFont({
  src: [
    { path: "./fontes/andika-latin-400-normal.woff2", weight: "400" },
    { path: "./fontes/andika-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-leitura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaveta Kids",
  description: "Ferramentas interativas para o 1.º ciclo, da Gaveta de Fichas.",
};

export const viewport: Viewport = {
  themeColor: "#FFF8F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${nunito.variable} ${andika.variable}`}>
      <body>{children}</body>
    </html>
  );
}
