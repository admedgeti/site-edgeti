// .eleventy.js
module.exports = function(eleventyCc) {
  // Copia as pastas de assets direto para a pasta de saída sem alterar nada
  eleventyCc.addPassthroughCopy("CNAME");
  eleventyCc.addPassthroughCopy("assets");
  eleventyCc.addPassthroughCopy("servicos");
  eleventyCc.addPassthroughCopy("cidades");
  eleventyCc.addPassthroughCopy("informatica");
  eleventyCc.addPassthroughCopy("redes");
  eleventyCc.addPassthroughCopy("seguranca");
  eleventyCc.addPassthroughCopy("cloud");
  eleventyCc.addPassthroughCopy("suporte-tecnico");
  eleventyCc.addPassthroughCopy("robots.txt");
  eleventyCc.addPassthroughCopy("sitemap.xml");

  // Configura as pastas de entrada e saída
  return {
    dir: {
      input: ".",         // Raiz do projeto
      includes: "_includes", // Onde vão ficar os templates/layouts
      output: "_site"     // Pasta final compilada (o que vai rodar no Apache/Nginx)
    },
    templateFormats: ["md", "html", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};