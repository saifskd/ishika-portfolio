const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const development = phase === PHASE_DEVELOPMENT_SERVER;
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.IS_GITHUB_PAGES === 'true';
  const basePath = development ? '' : (isGitHubPages ? '/ishika-portfolio' : '');

  return {
    reactStrictMode: true,
    output: 'export',
    distDir: development ? '.next-dev' : '.next',
    trailingSlash: true,
    basePath,
    assetPrefix: basePath || undefined,
    images: { unoptimized: true },
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || (isGitHubPages ? 'https://saifskd.github.io/ishika-portfolio' : 'https://ishikashakya.netlify.app'),
    },
  };
};

