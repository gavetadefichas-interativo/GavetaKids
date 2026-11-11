import Image from "next/image";
import Link from "next/link";
import { anos } from "@/lib/anos";
import styles from "./preview.module.css";
export const metadata = {title:"Pré-visualização · GavetaKids 2.0",robots:{index:false,follow:false}};
export default function Preview(){
 return <main className={styles.preview}><div className={styles.wrap}>
  <nav className={styles.bar}><Link className={styles.brand} href="/preview/">Gaveta<span>Kids</span></Link><Link className={styles.teacher} href="/professores/">Professores</Link></nav>
  <header className={styles.intro}><h1>Olá! Escolhe o teu ano</h1></header>
  <ul className={styles.years}>{anos.map(a=><li key={a.numero}><Link href={`/preview/ano/${a.numero}/`} className={styles.yearCard}><span className={styles.mascot}><Image src={a.imagem} alt="" priority={a.numero===1}/></span><strong>{a.rotulo}</strong><span>{a.mascote}</span></Link></li>)}</ul>
  <p className={styles.note}>Pré-visualização do novo design · O site atual mantém-se disponível.</p>
  <footer className={styles.footer}>CSO · <a href="https://gavetadefichas.wordpress.com">Gaveta de Fichas</a></footer>
 </div></main>;
}