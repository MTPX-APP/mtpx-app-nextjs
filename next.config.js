const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  target: "serverless",
  i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
};
