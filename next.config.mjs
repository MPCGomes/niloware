import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en-us/home',
                permanent: true,
            },
            {
                source: '/:locale(en-us|pt-br|es)',
                destination: '/:locale/home',
                permanent: true,
            },
            {
                source: '/(home|tos)',
                destination: '/en-us/home',
                permanent: true,
            },
        ];
    },
    sassOptions: {
        includePaths: [path.join(path.dirname(fileURLToPath(import.meta.url)), 'styles')],
        silenceDeprecations: ['legacy-js-api'],
    },
};

export default nextConfig;
