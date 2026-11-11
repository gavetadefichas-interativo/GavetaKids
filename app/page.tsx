import Image from "next/image";
import Link from "next/link";
import Cabecalho from "./cabecalho";
import Rodape from "./rodape";
import { anos } from "@/lib/anos";
import styles from "./site.module.css";

// Píxeis do logótipo Gaveta de Fichas: posição (%), tamanho (px) e cor.
const pixeis: [number, number, number, "pxAzul" | "pxClaro" | "pxLaranja"][] = [
  [5, 4, 12, "pxAzul"], [10, 7, 6, "pxClaro"], [15, 3, 8, "pxLaranja"], [22, 6, 5, "pxAzul"],
  [76, 5, 6, "pxLaranja"], [84, 3, 14, "pxAzul"], [90, 7, 8, "pxLaranja"], [95, 3, 6, "pxClaro"],
];

export default function Entrada() {
  return (
    <main className={styles.site}>
      <div className={styles.wrap}>
        <Cabecalho />
        <section className={styles.hero} aria-labelledby="titulo-inicio">
          <span className={styles.pixels} aria-hidden="true">
            {pixeis.map(([x, y, t, c], i) => (
              <i key={i} className={styles[c]} style={{ left: `${x}%`, top: `${y}%`, width: t, height: t }} />
            ))}
          </span>
          <div className={styles.heroIntro}>
            <h1 id="titulo-inicio">Pronto para uma nova descoberta?</h1>
            <p>Escolhe o teu ano e começa a explorar com a tua mascote!</p>
          </div>
          <ul className={styles.scene}>
            {anos.map((a) => (
              <li key={a.numero}>
                <Link href={`/ano/${a.numero}/`} className={`${styles.pick} ${a.tema}`} aria-label={`${a.rotulo}, com ${a.mascote}, ${a.papel}`}>
                  <span className={styles.pickArt}><Image src={a.imagem} alt="" priority /></span>
                  <span className={styles.pickName}>{a.mascote}</span>
                  <span className={styles.pickMessage}>
                    <span className={styles.pickRole}>{a.papel}</span>
                    <span className={styles.pickGreeting} aria-hidden="true">{["Vamos descobrir!", "Vamos inventar!", "Vamos resolver!", "Vamos inovar!"][a.numero - 1]}</span>
                  </span>
                  <span className={styles.pickButton}>{a.rotulo} <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Rodape />
      </div>
    </main>
  );
}
