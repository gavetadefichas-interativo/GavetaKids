import Image from "next/image";
import Rodape from "@/app/rodape";
import Link from "next/link";
import { anos } from "@/lib/anos";

export default function Entrada() {
  return (
    <main className="pagina">
      <div className="barra-topo">
        <span className="marca">Gaveta Kids</span>
        <Link href="/professores/" className="ligacao-professores">
          Professores
        </Link>
      </div>

      <header className="cabecalho">
        <h1 className="titulo-1">Olá! Escolhe o teu ano</h1>
        <p>Cada ano tem a sua mascote e as suas ferramentas.</p>
      </header>

      <ul className="grelha-anos">
        {anos.map((ano) => (
          <li key={ano.numero}>
            <Link href={`/ano/${ano.numero}/`} className={`cartao-ano ${ano.tema}`}>
              <span className="faixa etiqueta">{ano.rotulo}</span>
              <div className="figura">
                <Image src={ano.imagem} alt="" priority />
              </div>
              <div className="texto">
                <h2 className="titulo-2">{ano.mascote}</h2>
                <p>{ano.papel}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Rodape />
    </main>
  );
}
