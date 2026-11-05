# Gaveta Kids: instruções para o Claude

Aplicação para alunos do 1.º ciclo (6 a 10 anos), usada no tablet, no computador e no quadro interativo. A autora é C. Sofia Oliveira. Toda a interface e documentação são em português de Portugal.

## Regras

- Desenvolvimento por fases: primeiro a fundação, depois as contas e o backend (Supabase). Não acrescentar dependências sem necessidade. Menos é mais.
- O site é estático (`output: "export"`): não usar funcionalidades de servidor (rotas de API, server actions, middleware).
- Cores, espaços, cantos e sombras: usar só as variáveis de `app/tokens.css`, geradas de `design/tokens.json`. Nunca escrever cores à mão. Para mudar um valor, alterar `design/tokens.json`.
- Cada ano tem a sua classe (`ano-1` a `ano-4`), que define `--ano`, `--ano-texto`, `--ano-cor-texto` e `--ano-claro`.
- Nunca usar texto branco sobre o laranja do 4.º ano.
- O texto tem no mínimo 16px (etiquetas) e 20px (texto corrido). Tudo o que se toca mede pelo menos `--alvo-toque` (56px).
- Usar a Andika para o que a criança lê e a Nunito para títulos e botões.
- Falar com a criança por «tu», com frases curtas e verbos no início. Dizer «Tenta outra vez», nunca «Errado».
- As mascotes não se redesenham: usar só as imagens de `assets/mascotes/`.
- Não recolher dados pessoais das crianças (RGPD).
