import Image from "next/image";
import Rodape from "@/app/rodape";
import Link from "next/link";
import { notFound } from "next/navigation";
import { anos, disciplinas, obterAno } from "@/lib/anos";
import { enderecoJogo, jogosDe } from "@/lib/jogos";

export const dynamicParams = false;
export function generateStaticParams() { return anos.map((a) => ({ ano: String(a.numero) })); }
export async function generateMetadata({ params }: { params: Promise<{ ano: string }> }) {
  const ano = obterAno((await params).ano);
  return { title: ano ? `${ano.rotulo} · GavetaKids` : "GavetaKids" };
}
const temas: Record<string,string> = {"Português":"portugues","Matemática":"matematica","Estudo do Meio":"estudo-meio","TIC":"tic"};
const icones: Record<string,string> = {"Português":"📖","Matemática":"∑","Estudo do Meio":"✿","TIC":"⌘"};
export default async function PaginaAno({ params }: { params: Promise<{ ano: string }> }) {
  const ano = obterAno((await params).ano);
  if (!ano) notFound();
  return (
    <main className="pagina pagina-v2">
      <div className="barra-topo">
        <Link href="/" className="marca">Gaveta<span>Kids</span></Link>
        <Link href="/professores/" className="ligacao-professores">Professores</Link>
      </div>
      <Link href="/" className="botao voltar-v2"><span aria-hidden="true">←</span> Voltar aos anos</Link>
      <header className="topo-ano topo-ano-v2">
        <Image src={ano.imagem} alt={`${ano.mascote}, mascote do ${ano.rotulo}`} priority />
        <div><h1 className="titulo-1">{ano.rotulo} · {ano.mascote}</h1><p>Escolhe uma disciplina e descobre os jogos.</p></div>
      </header>
      <ul className="grelha-disciplinas disciplinas-v2">
        {disciplinas.map((d) => {
          const lista = jogosDe(ano.numero,d);
          return <li key={d} className={`disciplina disciplina-v2 ${temas[d]}`}>
            <h2 className="titulo-3"><span className="icone-disciplina" aria-hidden="true">{icones[d]}</span>{d}</h2>
            {lista.length === 0 ? <span className="estado etiqueta">Em breve</span> :
              <ul className="lista-jogos">
                {lista.map((j) => <li key={j.pasta}><a href={enderecoJogo(j)} className="jogo jogo-v2">
                  <span className="nome">{j.titulo}</span><span className="descricao">{j.descricao}</span>
                </a></li>)}
              </ul>}
          </li>;
        })}
      </ul>
      <Rodape />
    </main>
  );
}
