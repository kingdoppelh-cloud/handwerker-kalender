import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'HandwerkerKalender Pro',
        short_name: 'HandwerkerApp',
        description: 'Buchen Sie Ihren Handwerker-Termin einfach online.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1E40AF',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
