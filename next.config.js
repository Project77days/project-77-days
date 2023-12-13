const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: !isProduction,
  },
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: false,
  swcMinify: false,
});
