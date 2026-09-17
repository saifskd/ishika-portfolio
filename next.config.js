const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const development = phase === PHASE_DEVELOPMENT_SERVER;
  const basePath = development ? '' : '/ishika-portfolio';
  return {
    reactStrictMode: true,
    output: 'export',
    distDir: development ? '.next-dev' : '.next',
    trailingSlash: true,
    basePath,
    assetPrefix: basePath,
    images: { unoptimized: true },
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://saifskd.github.io/ishika-portfolio',
    },
  };
};
