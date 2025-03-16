import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pic.re", // Dominio de las imágenes
        pathname: "/image/**", 
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // Dominio de las imágenes
        // pathname: "/image/**", 
      },
    ],
  },

};

export default nextConfig;
