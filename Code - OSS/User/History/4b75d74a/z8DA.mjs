/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'public1',
    images: {
        domains: ['images.unsplash.com', 'red.cloudinary.com']
    }
};

export default nextConfig;