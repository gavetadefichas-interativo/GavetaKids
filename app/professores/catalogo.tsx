"use client";

import { useState } from "react";
import { disciplinas } from "@/lib/anos";
import type { RecursoProfessor } from "@/lib/fichas";
import { enderecoJogo } from "@/lib/jogos";
import styles from "./professores.module.css";

const normalizar = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function Catalogo({ recursos }: { recursos: RecursoProfessor[] }) {
  const [ano, setAno] = useState("todos");
  const [disciplina, setDisciplina] = useState("Todas");
  const [pesquisa, setPesquisa] = useState("");

  const termo = normalizar(pesquisa.trim());
  const filtrados = recursos.filter(
    (r) =>
      (ano === "todos" || String(r.ano) === ano) &&
      (disciplina === "Todas" || r.disciplinas.some((d) => d === disciplina)) &&
      normalizar([r.titulo, r.descricao, ...r.disciplinas].join(" ")).includes(termo),
  );

  const limpar = () => {
    setAno("todos");
    setDisciplina("Todas");
    setPesquisa("");
  };

  return (
    <section aria-labelledby="biblioteca">
      <h2 id="biblioteca" className="titulo-2">
        Biblioteca de atividades
      </h2>
      <p aria-live="polite">
        {filtrados.length === 1 ? "1 recurso encontrado" : `${filtrados.length} recursos encontrados`}
      </p>

      <div className={styles.filtros}>
        <label>
          Ano
          <select value={ano} onChange={(e) => setAno(e.target.value)}>
            <option value="todos">Todos</option>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={String(n)}>
                {n}.º ano
              </option>
            ))}
          </select>
        </label>
        <label>
          Disciplina
          <select value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
            {["Todas", ...disciplinas].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <label>
          Pesquisar
          <input
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            type="search"
            placeholder="Título ou conteúdo"
          />
        </label>
        <button type="button" className="botao" onClick={limpar}>
          Limpar filtros
        </button>
      </div>

      {filtrados.length === 0 ? (
        <p>Não existem recursos para esta seleção.</p>
      ) : (
        <ul className={styles.lista}>
          {filtrados.map((r) => (
            <li key={r.pasta} className={styles.cartao}>
              <span className="etiqueta">
                {r.ano}.º ano · {r.disciplinas.join(" e ")}
              </span>
              <h3 className="titulo-3">{r.titulo}</h3>
              <p>{r.descricao}</p>
              <a className="botao" href={enderecoJogo(r)} target="_blank" rel="noopener noreferrer">
                Abrir atividade
              </a>
              <details>
                <summary>Ficha pedagógica</summary>
                <p>
                  <strong>Tema:</strong> {r.ficha.tema}
                </p>
                <h4>Objetivos</h4>
                <ul>
                  {r.ficha.objetivos.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <h4>Sequência da aula</h4>
                <ol>
                  {r.ficha.sequencia.map((x) => (
                    <li key={x.etapa}>
                      <strong>{x.etapa}:</strong> {x.descricao}
                    </li>
                  ))}
                </ol>
                <h4>Observação e avaliação</h4>
                <ul>
                  {r.ficha.avaliacao.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                {r.ficha.observacoes && <p>{r.ficha.observacoes}</p>}
              </details>
            </li>
          ))}
        </ul>
      )}

      <p className={styles.nota}>
        Fichas de apoio à preparação de aulas, adaptáveis ao contexto de cada turma. Não representam aulas realizadas.
      </p>
    </section>
  );
}
