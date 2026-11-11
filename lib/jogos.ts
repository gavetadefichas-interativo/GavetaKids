import type { StaticImageData } from "next/image";
import type { disciplinas } from "@/lib/anos";

export type Disciplina = (typeof disciplinas)[number];

export type Jogo = {
  /** Pasta do jogo em public/jogos/ */
  pasta: string;
  titulo: string;
  descricao: string;
  ano: 1 | 2 | 3 | 4;
  disciplinas: Disciplina[];
  /** Miniatura própria do jogo (imagem em assets/miniaturas/, proporção 4:3). Opcional. */
  miniatura?: StaticImageData;
};

// Jogos já criados para a Gaveta de Fichas, tal como foram publicados.
export const jogos: Jogo[] = [
  {
    pasta: "numeros-ate-5",
    titulo: "Números até 5 com o Byte",
    descricao: "Dez minijogos para contar, comparar e ordenar até 5.",
    ano: 1,
    disciplinas: ["Matemática"],
  },
  {
    pasta: "bolo-mae-cila",
    titulo: "O bolo da mãe Cila",
    descricao: "Ler o texto, responder, descobrir o ce, ci e ç e ordenar frases.",
    ano: 1,
    disciplinas: ["Português"],
  },
  {
    pasta: "exploradores-outono",
    titulo: "Exploradores do Outono",
    descricao: "Letras, sombras de animais e castanhas para contar, em três níveis.",
    ano: 1,
    disciplinas: ["Estudo do Meio"],
  },
  {
    pasta: "cacadores-do-c",
    titulo: "Caçadores do Ç",
    descricao: "Palavras com ça, ço e çu: cruzadas, balões, labirinto e frases.",
    ano: 2,
    disciplinas: ["Português"],
  },
  {
    pasta: "numeros-amigos-decomposicao",
    titulo: "Números amigos e decomposição",
    descricao: "Amigos do 10 e do 100, ábaco, reta numérica, pares e ordem.",
    ano: 2,
    disciplinas: ["Matemática"],
  },
  {
    pasta: "gramatica-regresso",
    titulo: "Gramática no regresso à escola",
    descricao: "Classes de palavras e tempos verbais a partir de um texto.",
    ano: 3,
    disciplinas: ["Português"],
  },
];

export function jogosDe(ano: number, disciplina: Disciplina): Jogo[] {
  return jogos.filter((j) => j.ano === ano && j.disciplinas.includes(disciplina));
}

/** Endereço do jogo, já com o caminho base do site (ex.: /GavetaKids no GitHub Pages). */
export function enderecoJogo(jogo: Jogo): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/jogos/${jogo.pasta}/`;
}
