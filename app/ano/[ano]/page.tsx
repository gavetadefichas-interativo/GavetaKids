import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { anos, disciplinas, obterAno } from "@/lib/anos";
import { enderecoJogo, jogosDe } from "@/lib/jogos";

export const dynamicParams = false;

export function generateStaticParams() {
  return anos.map((a) => ({ ano: String(a.numero) }));
}

export async function generateMetadata({ params }: { params: Promise<{ ano: string }> }) {
  const ano = obterAno((await params).ano);
  return { title: ano ? `${ano.rotulo} · Gaveta Kids` : "Gaveta Kids" };
}

export default async function PaginaAno({ params }: { params: Promise<{ ano: string }> }) {
  const ano = obterAno((await params).ano);
  if (!ano) notFound();

  return (
    <main className={`pagina ${ano.tema}`}>
      <Link href="/" className="botao">
        <span aria-hidden="true">←</span> Voltar
      </Link>

      <header className="topo-ano">
        <Image src={ano.imagem} alt={`${ano.mascote}, a mascote do ${ano.rotulo}`} priority />
        <div>
          <span className="rotulo etiqueta">{ano.rotulo}</span>
          <h1 className="titulo-1">Olá! Eu sou o {ano.mascote}</h1>
          <p>{ano.frase}</p>
        </div>
      </header>

      <h2 className="titulo-2">O que queres fazer hoje?</h2>
      <ul className="grelha-disciplinas" style={{ marginTop: "var(--espaco-4)" }}>
        {disciplinas.map((d) => {
          const lista = jogosDe(ano.numero, d);
          return (
            <li key={d} className="disciplina">
              <h3 className="titulo-3">{d}</h3>
              {lista.length === 0 ? (
                <span className="estado etiqueta">Em breve</span>
              ) : (
                <ul className="lista-jogos">
                  {lista.map((j) => (
                    <li key={j.pasta}>
                      <a href={enderecoJogo(j)} className="jogo">
                        <span className="nome">{j.titulo}</span>
                        <span className="descricao">{j.descricao}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <footer className="rodape">Uma criação da Gaveta de Fichas.</footer>
    </main>
  );
}
