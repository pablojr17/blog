const path = require("path");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  webpack: (config) => {
    // Resolve o caminho para o arquivo visitors.json
    const visitorsJsonPath = path.join(process.cwd(), "data", "visitors.json");

    // Adiciona um alias para que você possa importar o arquivo visitors.json diretamente
    config.resolve.alias["data/visitors.json"] = visitorsJsonPath;

    return config;
  },
};
