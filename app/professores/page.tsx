import type { Metadata } from "next";
import Link from "next/link";
import Rodape from "@/app/rodape";
import Catalogo from "./catalogo";
import { recursosProfessor } from "@/lib/fichas";
import estilos from "./professores.module.css";

export const metadata: Metadata = {
  title: "Espaço do Professor · Gaveta Kids",
  description: "Catálogo de recursos interativos e propostas pedagógicas para professores do 1.º Ciclo.",
};

export default function EspacoProfessor() {
  return (
    <main className="pagina">
      <nav aria-label="Navegação" className={estilos.navegacao}>
        <Link href="/" className="botao">← Página inicial</Link>
        <span className="marca">Gaveta Kids</span>
      </nav>
      <header className={estilos.introducao}>
        <span className="etiqueta">Gaveta de Fichas · Apoio pedagógico</span>
        <h1 className="titulo-1">Espaço do Professor</h1>
        <p>Encontra os jogos educativos por ano e disciplina. Consulta uma proposta de exploração pedagógica e abre diretamente cada atividade.</p>
      </header>
      <Catalogo recursos={recursosProfessor} />
      <Rodape />
    </main>
  );
}
