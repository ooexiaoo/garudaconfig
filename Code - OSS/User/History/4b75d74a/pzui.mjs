/** @type {import('next').NextConfig} */
const nextConfig = {
   /*  output: 'export', */
    /* basePath: "/nextjs-github-pages", */
    /* reactStrictMode: true, */
    distDir: 'public',
    images: {
        unoptimized: false,
        domains: ['images.unsplash.com', 'red.cloudinary.com']
    }
};

export default nextConfig;