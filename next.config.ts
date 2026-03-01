import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/demos/black-rose",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
