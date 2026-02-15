import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/dashboard/',
        },
        sitemap: 'https://handwerker-kalender.vercel.app/sitemap.xml',
    }
}
