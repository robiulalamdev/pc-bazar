/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.startech.com.bd",
      "cdn-icons-png.flaticon.com",
      "techbd.com.bd",
      "www.skyland.com.bd",
      "asset.msi.com",
    ],
  },
};

module.exports = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

module.exports = nextConfig;
