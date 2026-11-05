import type { Jogo } from "@/lib/jogos";
import { jogos } from "@/lib/jogos";

export type Ficha = {
  pasta: string;
  tema: string;
  objetivos: string[];
  sequencia: { etapa: string; descricao: string }[];
  avaliacao: string[];
  observacoes?: string;
  periodo?: 1 | 2 | 3;
};

const propostas: Record<string, Omit<Ficha, "pasta">> = {
  "numeros-ate-5": {
    tema: "Contagem, comparação e ordenação de números até 5",
    objetivos: ["Contar elementos em conjuntos até cinco.", "Comparar pequenas quantidades.", "Ordenar números e representar quantidades."],
    sequencia: [
      { etapa: "Mobilizar conhecimentos", descricao: "Contar objetos da sala e associar cada quantidade ao respetivo numeral." },
      { etapa: "Explorar o jogo", descricao: "Apresentar o jogo no quadro e resolver um exemplo em conjunto." },
      { etapa: "Praticar", descricao: "Resolver os minijogos de contagem, comparação e ordenação, individualmente ou a pares." },
      { etapa: "Consolidar", descricao: "Rever estratégias de contagem e discutir os exercícios em que surgiram dificuldades." },
    ],
    avaliacao: ["Conta corretamente até cinco.", "Compara e ordena quantidades.", "Interage com autonomia progressiva."],
  },
  "bolo-mae-cila": {
    tema: "Leitura e compreensão; casos de leitura ce, ci e ç",
    objetivos: ["Ler e compreender um texto curto.", "Reconhecer e aplicar ce, ci e ç.", "Ordenar frases de forma coerente."],
    sequencia: [
      { etapa: "Antecipar a leitura", descricao: "Explorar o título e antecipar o conteúdo da história." },
      { etapa: "Ler e compreender", descricao: "Ler o texto e responder às perguntas de compreensão apresentadas." },
      { etapa: "Praticar a ortografia", descricao: "Realizar os desafios relativos a ce, ci e ç e à ordenação de frases." },
      { etapa: "Consolidar", descricao: "Ler palavras selecionadas, esclarecer dúvidas e corrigir respostas." },
    ],
    avaliacao: ["Identifica informação no texto.", "Distingue os casos de leitura trabalhados.", "Ordena frases com sentido."],
  },
  "exploradores-outono": {
    tema: "O Outono: elementos naturais, animais e contagem",
    objetivos: ["Identificar elementos associados ao Outono.", "Relacionar animais com representações visuais.", "Contar e comparar quantidades de castanhas."],
    sequencia: [
      { etapa: "Conversar sobre a estação", descricao: "Observar imagens e recolher conhecimentos prévios sobre o Outono." },
      { etapa: "Conhecer os desafios", descricao: "Demonstrar as interações do recurso e explicar os três níveis." },
      { etapa: "Explorar e resolver", descricao: "Realizar as tarefas sobre letras, sombras de animais e contagem de castanhas." },
      { etapa: "Partilhar descobertas", descricao: "Conversar sobre os elementos da estação e as estratégias utilizadas." },
    ],
    avaliacao: ["Reconhece elementos do Outono.", "Estabelece correspondências visuais.", "Conta quantidades adequadas ao nível."],
    observacoes: "Proposta interdisciplinar catalogada em Estudo do Meio; integra também competências de leitura e Matemática.",
  },
  "cacadores-do-c": {
    tema: "Ortografia de palavras com ça, ço e çu",
    objetivos: ["Reconhecer palavras com ç.", "Ler e escrever palavras com ça, ço e çu.", "Construir frases com sentido."],
    sequencia: [
      { etapa: "Rever os sons e grafias", descricao: "Ler exemplos e comparar palavras que contêm ça, ço e çu." },
      { etapa: "Modelar a atividade", descricao: "Demonstrar um desafio no quadro interativo." },
      { etapa: "Resolver missões", descricao: "Realizar as palavras cruzadas, os desafios com balões, o labirinto e as tarefas com frases." },
      { etapa: "Corrigir e consolidar", descricao: "Reler as palavras e frases e discutir os erros mais frequentes." },
    ],
    avaliacao: ["Reconhece as grafias em contexto.", "Escreve palavras com correção progressiva.", "Participa nas tarefas de leitura e escrita."],
  },
  "numeros-amigos-decomposicao": {
    tema: "Decomposição de números e amigos do 10 e do 100",
    objetivos: ["Decompor números em diferentes parcelas.", "Identificar complementos do 10 e do 100.", "Utilizar o ábaco e a reta numérica para representar números."],
    sequencia: [
      { etapa: "Recuperar estratégias", descricao: "Rever os complementos do 10 com exemplos concretos." },
      { etapa: "Demonstrar representações", descricao: "Explorar o ábaco e a reta numérica em conjunto." },
      { etapa: "Realizar os jogos", descricao: "Resolver os desafios de decomposição, pares numéricos e ordenação." },
      { etapa: "Explicar procedimentos", descricao: "Pedir aos alunos que verbalizem diferentes decomposições e estratégias." },
    ],
    avaliacao: ["Decompõe números corretamente.", "Identifica complementos numéricos.", "Explica a estratégia utilizada."],
  },
  "gramatica-regresso": {
    tema: "Classes de palavras e tempos verbais",
    objetivos: ["Identificar classes de palavras num texto.", "Reconhecer diferentes tempos verbais.", "Aplicar conhecimentos gramaticais em contexto."],
    sequencia: [
      { etapa: "Ler e contextualizar", descricao: "Ler o texto de base e conversar sobre a situação apresentada." },
      { etapa: "Rever gramática", descricao: "Localizar exemplos de classes de palavras e de formas verbais." },
      { etapa: "Resolver desafios", descricao: "Realizar as atividades digitais sobre classes de palavras e tempos verbais." },
      { etapa: "Verificar respostas", descricao: "Justificar escolhas e rever as dúvidas identificadas." },
    ],
    avaliacao: ["Identifica classes de palavras.", "Distingue tempos verbais trabalhados.", "Justifica respostas gramaticais."],
  },
};

export type RecursoProfessor = Jogo & { ficha: Ficha };

export const recursosProfessor: RecursoProfessor[] = jogos
  .filter((jogo) => Boolean(propostas[jogo.pasta]))
  .map((jogo) => ({
    ...jogo,
    ficha: { pasta: jogo.pasta, ...propostas[jogo.pasta] },
  }));
