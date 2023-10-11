/** @type {import('next').NextConfig} */

const branchName = process.env.REPOSITORY_NAME
  ? "/" + process.env.REPOSITORY_NAME
  : "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
        pathname: "**/*.png",
      },
    ],
  },
};

module.exports = nextConfig;
