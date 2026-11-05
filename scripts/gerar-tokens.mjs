// Gera app/tokens.css a partir de design/tokens.json (o sistema de design Gaveta Kids).
// Corre sozinho antes de "npm run dev" e "npm run build". Não edites app/tokens.css à mão.
import { readFileSync, writeFileSync } from "node:fs";

const t = JSON.parse(readFileSync(new URL("../design/tokens.json", import.meta.url), "utf8"));
const linhas = [];
const valor = (v) => (typeof v === "string" && v.startsWith("{") ? `var(--${v.slice(1, -1)})` : v);
const tema = t.color.themes[0].id;

for (const c of t.color.tokens) {
  const v = typeof c.value === "string" ? c.value : c.value[tema];
  linhas.push(`  --${c.name}: ${valor(v)};`);
}
for (const familia of ["spacing", "radius", "shadow"]) {
  for (const tok of t[familia]?.tokens ?? []) linhas.push(`  --${tok.name}: ${tok.value};`);
}

const css = `/* Gerado por scripts/gerar-tokens.mjs a partir de design/tokens.json. Não editar à mão. */\n:root {\n${linhas.join("\n")}\n}\n`;
writeFileSync(new URL("../app/tokens.css", import.meta.url), css);
console.log(`tokens.css: ${linhas.length} variáveis`);
