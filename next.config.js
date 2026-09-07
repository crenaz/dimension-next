/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add Partytown configuration
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
