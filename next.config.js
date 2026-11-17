// Exportação estática para o GitHub Pages.
// Dentro do GitHub Actions, o basePath é o nome do repositório (exceto usuario.github.io).
const repo = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";
const basePath = process.env.GITHUB_ACTIONS && repo && !repo.endsWith(".github.io") ? `/${repo}` : "";

module.exports = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
