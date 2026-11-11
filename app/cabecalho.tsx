import Link from "next/link";
import styles from "./site.module.css";

export const frase = "Jogos e recursos interativos para o 1.º ciclo";

export default function Cabecalho() {
  return (
    <nav className={styles.bar}>
      <Link className={styles.brand} href="/" aria-label="GavetaKids, início">Gaveta<span>Kids</span></Link>
      <p className={styles.tagline}>{frase}</p>
      <Link className={styles.teacher} href="/professores/">Professores</Link>
    </nav>
  );
}
