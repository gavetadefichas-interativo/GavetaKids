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
        <section className={styles.hero} aria-labelledby="titulo-inicio">
          <div className={styles.heroArt}>
            <Image src={faixa} alt="" priority sizes="(max-width: 1120px) 100vw, 1120px" />
          </div>
          <h1 id="titulo-inicio">Olá! Escolhe o teu ano</h1>
          <ul className={styles.scene}>
            {anos.map((a) => (
              <li key={a.numero}>
                <Link href={`/ano/${a.numero}/`} className={styles.pick}>
                  <Image src={a.imagem} alt="" priority />
                  <span className={styles.pickLabel}>
                    <strong>{a.rotulo}</strong>
                    <span>{a.mascote}</span>
                  </span>
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
