/* GavetaKids: navegação comum aos jogos independentes (sem interferir com o seu código). */
(() => {
  "use strict";
  const script = document.currentScript;
  if (!script || document.getElementById("gk-navegacao")) return;
  const ano = Number(script.dataset.ano);
  if (![1, 2, 3, 4].includes(ano)) return;
  const rootURL = new URL("./", script.src);
  const href = (path) => new URL(path, rootURL).href;
  const host = document.createElement("aside");
  host.id = "gk-navegacao";
  host.setAttribute("aria-label", "Navegação do GavetaKids");
  const shadow = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `
    :host{all:initial;position:fixed;z-index:2147483640;top:calc(12px + env(safe-area-inset-top, 0px));right:calc(12px + env(safe-area-inset-right, 0px));font-family:system-ui,"Segoe UI",sans-serif;color:#1f2f4a}
    *{box-sizing:border-box}
    button,a{font:700 16px/1.35 system-ui,"Segoe UI",sans-serif}
    button{min-height:48px;border:2px solid #1f2f4a;border-radius:14px;padding:10px 16px;color:#fff;background:#1f2f4a;cursor:pointer;box-shadow:0 3px 8px #0003}
    button:focus-visible,a:focus-visible{outline:3px solid #0064c2;outline-offset:3px}
    nav{position:absolute;top:calc(100% + 8px);right:0;min-width:235px;max-width:calc(100vw - 24px);border-radius:16px;background:#fff;border:2px solid #1f2f4a;box-shadow:0 8px 24px #0003;padding:8px}
    nav[hidden]{display:none}
    a{display:block;min-height:48px;padding:13px 14px;border-radius:10px;text-decoration:none;color:#1f2f4a}
    a:hover,a:focus-visible{background:#e3f0fc}
    @media(max-width:480px){:host{top:calc(8px + env(safe-area-inset-top, 0px));right:calc(8px + env(safe-area-inset-right, 0px))}button{padding:9px 12px;font-size:15px}nav{min-width:210px}}
    @media print{:host{display:none}}
  `;
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "gk-destinos");
  toggle.textContent = "↩ Voltar";
  const nav = document.createElement("nav");
  nav.id = "gk-destinos";
  nav.hidden = true;
  const entries = [
    ["← " + ano + ".º ano", href("ano/" + ano + "/")],
    ["Espaço do Professor", href("professores/")],
    ["Página inicial", href("")]
  ];
  for (const [label, url] of entries) {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    nav.append(a);
  }
  const setOpen = (open) => {
    nav.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(nav.hidden));
  shadow.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!event.composedPath().includes(host)) setOpen(false);
  });
  shadow.append(style, toggle, nav);
  host.hidden = false;
  document.body.append(host);
})();