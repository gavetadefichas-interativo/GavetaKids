import Image from "next/image";
import Rodape from "@/app/rodape";
import Link from "next/link";
import { anos } from "@/lib/anos";

export default function Entrada() {
  return (
    <main className="pagina pagina-v2">
      <div className="barra-topo">
        <Link className="marca" href="/" aria-label="GavetaKids — início">Gaveta<span>Kids</span></Link>
        <Link href="/professores/" className="ligacao-professores">Professores</Link>
      </div>
      <header className="cabecalho cabecalho-v2">
        <h1 className="titulo-1">Olá! Escolhe o teu ano</h1>
      </header>
      <ul className="grelha-anos grelha-anos-v2">
        {anos.map((ano) => (
          <li key={ano.numero}>
            <Link href={`/ano/${ano.numero}/`} className="cartao-ano cartao-ano-v2">
              <div className="figura"><Image src={ano.imagem} alt="" priority={ano.numero === 1} /></div>
              <span className="ano-nome">{ano.rotulo}</span>
              <span className="mascote-nome">{ano.mascote}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Rodape />
    </main>
  );
}
