/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "api.hsabook.vn", 
      "hsa-education.sgp1.digitaloceanspaces.com",
      "s3-website-r1.s3cloud.vn"
    ],
  },
};

export default nextConfig;
