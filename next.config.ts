import type { NextConfig } from "next";

// Enquanto o site está no GitHub Pages, vive em /GavetaKids.
// Quando passar para kids.gavetadefichas.pt, basta tirar BASE_PATH do workflow.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Os jogos em public/jogos/ são páginas HTML próprias: as ligações para eles precisam do caminho base.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
