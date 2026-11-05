# Gaveta Kids

Ferramentas interativas para alunos do 1.º ciclo, da Gaveta de Fichas. Cada ano tem a sua mascote: Byte (1.º), Pixel (2.º), Mega (3.º) e Giga (4.º).

**Fase atual:** fundação. Tem o ecrã de escolha do ano e uma página por ano, com o sistema de design aplicado. As ferramentas, as contas e o backend (Supabase) ficam para as fases seguintes.

## Como está feito

- Next.js com TypeScript, exportado como site estático para a pasta `out/`.
- O site é publicado no GitHub Pages sempre que há alterações no ramo `main` (ver `.github/workflows/publicar.yml`).
- As cores, os espaços, os cantos e as sombras vêm de `design/tokens.json`, uma cópia do sistema de design Gaveta Kids. O ficheiro `app/tokens.css` é gerado a partir dele e não se edita à mão.
- Os tipos de letra (Nunito e Andika) estão no projeto, em `app/fontes/`, com as respetivas licenças OFL.
- As mascotes em `assets/mascotes/` são recortes da folha oficial das mascotes.

## Trabalhar no computador

```bash
npm install
npm run dev      # abre em http://localhost:3000
npm run build    # gera o site em out/
```

## Estrutura

```
app/            ecrãs (page.tsx), estilos e tipos de letra
app/ano/[ano]/  página de cada ano
lib/anos.ts     dados dos quatro anos (mascote, papel, frase, cor)
assets/         imagens das mascotes
design/         tokens do sistema de design
scripts/        gerador de app/tokens.css
```
