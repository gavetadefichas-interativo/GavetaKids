import type { StaticImageData } from "next/image";
import byte from "@/assets/mascotes/byte.webp";
import pixel from "@/assets/mascotes/pixel.webp";
import mega from "@/assets/mascotes/mega.webp";
import giga from "@/assets/mascotes/giga.webp";

export type Ano = {
  numero: 1 | 2 | 3 | 4;
  rotulo: string;
  mascote: string;
  papel: string;
  frase: string;
  imagem: StaticImageData;
  /** Classe CSS com as cores do ano (ver app/globals.css). */
  tema: "ano-1" | "ano-2" | "ano-3" | "ano-4";
};

// Textos da folha oficial das mascotes.
export const anos: Ano[] = [
  {
    numero: 1,
    rotulo: "1.º ano",
    mascote: "Byte",
    papel: "O Explorador",
    frase: "Descobre o mundo digital com curiosidade e alegria!",
    imagem: byte,
    tema: "ano-1",
  },
  {
    numero: 2,
    rotulo: "2.º ano",
    mascote: "Pixel",
    papel: "O Inventor",
    frase: "Cria, imagina e constrói ideias incríveis!",
    imagem: pixel,
    tema: "ano-2",
  },
  {
    numero: 3,
    rotulo: "3.º ano",
    mascote: "Mega",
    papel: "O Programador",
    frase: "Pensa por passos, programa e resolve desafios!",
    imagem: mega,
    tema: "ano-3",
  },
  {
    numero: 4,
    rotulo: "4.º ano",
    mascote: "Giga",
    papel: "O Inovador",
    frase: "Inova, colabora e cria o futuro com tecnologia!",
    imagem: giga,
    tema: "ano-4",
  },
];

export const disciplinas = ["Português", "Matemática", "Estudo do Meio", "TIC"] as const;

export function obterAno(numero: string): Ano | undefined {
  return anos.find((a) => String(a.numero) === numero);
}
