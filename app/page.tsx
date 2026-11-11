import Image from "next/image";
import Link from "next/link";
import Rodape from "./rodape";
import { anos } from "@/lib/anos";
import styles from "./site.module.css";

export default function Entrada() {
  return (
    <main className={styles.site}>
      <div className={styles.wrap}>
        <nav className={styles.bar}>
          <Link className={styles.brand} href="/" aria-label="GavetaKids, início">Gaveta<span>Kids</span></Link>
          <Link className={styles.teacher} href="/professores/">Professores</Link>
        </nav>
        <header className={styles.intro}><h1>Olá! Escolhe o teu ano</h1></header>
        <ul className={styles.years}>
          {anos.map((a) => (
            <li key={a.numero}>
              <Link href={`/ano/${a.numero}/`} className={styles.yearCard}>
                <span className={styles.mascot}><Image src={a.imagem} alt="" priority={a.numero === 1} /></span>
                <strong>{a.rotulo}</strong>
                <span>{a.mascote}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Rodape />
      </div>
    </main>
  );
}
