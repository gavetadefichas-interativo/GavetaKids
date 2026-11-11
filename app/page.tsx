import Image from "next/image";
import Link from "next/link";
import Cabecalho from "./cabecalho";
import Rodape from "./rodape";
import { anos } from "@/lib/anos";
import faixa from "@/assets/fundos/faixa-inicio.webp";
import styles from "./site.module.css";

export default function Entrada() {
  return (
    <main className={styles.site}>
      <div className={styles.wrap}>
        <Cabecalho />
        <header className={styles.hero}>
          <h1>Olá! Escolhe o teu ano</h1>
          <div className={styles.heroArt}>
            <Image src={faixa} alt="" priority sizes="(max-width: 1120px) 100vw, 1120px" />
          </div>
        </header>
        <ul className={styles.years}>
          {anos.map((a) => (
            <li key={a.numero}>
              <Link href={`/ano/${a.numero}/`} className={styles.yearCard}>
                <span className={styles.mascot}><Image src={a.imagem} alt="" priority={a.numero === 1} /></span>
                <span className={styles.yearText}>
                  <strong>{a.rotulo}</strong>
                  <span>{a.mascote}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Rodape />
      </div>
    </main>
  );
}
