const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** Keep local development and production builds from overwriting each other. */
module.exports = (phase) => ({
  reactStrictMode: true,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next' : '.next-production',
});
