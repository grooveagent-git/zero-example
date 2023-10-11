/** @type {import('next').NextConfig} */

const branchName = process.env.REPO_NAME ? "/" + process.env.REPO_NAME : "";

const nextConfig = {
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
