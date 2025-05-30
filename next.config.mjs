/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "facetoqrimages.blob.core.windows.net",
        pathname: "/**", // permite todas las rutas del blob
      },
    ],
  },
};

export default nextConfig;
