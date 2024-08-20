/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
