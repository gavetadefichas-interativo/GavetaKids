import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {anos,disciplinas,obterAno} from "@/lib/anos";
import {jogosDe,enderecoJogo} from "@/lib/jogos";
import styles from "../../preview.module.css";
export const dynamicParams=false;
export function generateStaticParams(){return anos.map(a=>({ano:String(a.numero)}));}
export async function generateMetadata({params}:{params:Promise<{ano:string}>}){const a=obterAno((await params).ano);return {title:a?`${a.rotulo} · Pré-visualização GavetaKids`:"GavetaKids",robots:{index:false,follow:false}};}
const temas:Record<string,string>={"Português":"portugues","Matemática":"matematica","Estudo do Meio":"estudoMeio","TIC":"tic"};
const icons:Record<string,string>={"Português":"P","Matemática":"M","Estudo do Meio":"E","TIC":"T"};
export default async function PreviewAno({params}:{params:Promise<{ano:string}>}){
 const a=obterAno((await params).ano);if(!a)notFound();
 return <main className={styles.preview}><div className={styles.wrap}>
   <nav className={styles.bar}><Link href="/preview/" className={styles.brand}>Gaveta<span>Kids</span></Link><Link href="/professores/" className={styles.teacher}>Professores</Link></nav>
   <Link className={styles.back} href="/preview/">← Voltar aos anos</Link>
   <header className={styles.heading}><Image src={a.imagem} alt={`${a.mascote}, mascote do ${a.rotulo}`}/><div><h1>{a.rotulo} · {a.mascote}</h1><p>Escolhe uma disciplina e descobre os jogos.</p></div></header>
   <ul className={styles.subjects}>{disciplinas.map(d=>{const jogos=jogosDe(a.numero,d);return <li key={d} className={`${styles.subject} ${styles[temas[d]]}`}><h2><span className={styles.icon} aria-hidden="true">{icons[d]}</span>{d}</h2>{jogos.length?<ul className={styles.games}>{jogos.map(j=><li key={j.pasta}><a className={styles.game} href={enderecoJogo(j)}><strong>{j.titulo}</strong><span>{j.descricao}</span></a></li>)}</ul>:<span className={styles.empty}>Em breve</span>}</li>})}</ul>
   <p className={styles.note}>Pré-visualização · Os jogos continuam a funcionar nas suas páginas originais.</p><footer className={styles.footer}>CSO · <a href="https://gavetadefichas.wordpress.com">Gaveta de Fichas</a></footer>
 </div></main>;
}