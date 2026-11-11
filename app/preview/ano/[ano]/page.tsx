import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { anos, disciplinas, obterAno } from "@/lib/anos";
import { enderecoJogo, jogosDe } from "@/lib/jogos";
import { IconeDisciplina } from "../../icones";
import styles from "../../preview.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return anos.map((a) => ({ ano: String(a.numero) }));
}

export async function generateMetadata({ params }: { params: Promise<{ ano: string }> }) {
  const a = obterAno((await params).ano);
  return { title: a ? `${a.rotulo} · Pré-visualização GavetaKids` : "GavetaKids", robots: { index: false, follow: false } };
}

const temas = { "Português": "pt", "Matemática": "mat", "Estudo do Meio": "em", "TIC": "tic" } as const;

export default async function PreviewAno({ params }: { params: Promise<{ ano: string }> }) {
  const a = obterAno((await params).ano);
  if (!a) notFound();

  return (
    <main className={styles.preview}>
      <div className={styles.wrap}>
        <nav className={styles.bar}>
          <Link href="/preview/" className={styles.brand}>Gaveta<span>Kids</span></Link>
          <Link href="/professores/" className={styles.teacher}>Professores</Link>
        </nav>
        <Link className={styles.back} href="/preview/"><span aria-hidden="true">←</span> Voltar aos anos</Link>
        <header className={styles.heading}>
          <Image src={a.imagem} alt={`${a.mascote}, mascote do ${a.rotulo}`} />
          <h1>{a.rotulo} · {a.mascote}</h1>
        </header>
        <ul className={styles.subjects}>
          {disciplinas.map((d) => {
            const jogos = jogosDe(a.numero, d);
            return (
              <li key={d} className={`${styles.subject} ${styles[temas[d]]} ${jogos.length ? "" : styles.empty}`}>
                <h2><span className={styles.icon}><IconeDisciplina disciplina={d} /></span>{d}</h2>
                {jogos.length ? (
                  <ul className={styles.games}>
                    {jogos.map((j) => (
                      <li key={j.pasta}>
                        <a className={styles.game} href={enderecoJogo(j)}>
                          {j.miniatura && <Image className={styles.thumb} src={j.miniatura} alt="" />}
                          <span>
                            <strong>{j.titulo}</strong>
                            <span>{j.descricao}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className={styles.soon}>Em breve</span>
                )}
              </li>
            );
          })}
        </ul>
        <footer className={styles.footer}>CSO · <a href="https://gavetadefichas.wordpress.com">Gaveta de Fichas</a></footer>
      </div>
    </main>
  );
}
