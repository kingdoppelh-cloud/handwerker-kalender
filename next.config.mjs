/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['lucide-react', 'date-fns', 'lodash', 'recharts', 'framer-motion'],
    },
};

export default nextConfig;
