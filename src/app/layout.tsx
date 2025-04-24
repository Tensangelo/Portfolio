import { ReactNode } from 'react';
import type { Metadata } from 'next';
// Styles
import '../styles/global.scss';
// Components
import Layout from '@components/Layout';

export const metadata: Metadata = {
    title: 'Angelo Gaona',
    description: 'Portfolio of Angelo Gaona Front End Developer',
    authors: [
        {
            name: "Angelo Gaona | Desarrollador Fullstack",
            url: "https://www.linkedin.com/in/angelo-gaona/"
        }
    ],
    creator: "Tensangelo (Angelo Gaona)",
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        title: 'Angelo Gaona | Front End Developer & Back end Developer',
        description: 'Modern portfolio showcasing web development skills, projects and experience of Angelo Gaona.',
        url: 'https://portfolio-ang.vercel.app/',
        siteName: 'Angelo Gaona Portfolio',
        images: [
        {
            url: 'https://portfolio-ang.vercel.app/portada.png', // tu imagen de previsualización
            width: 1200,
            height: 630,
            alt: 'Preview image of Angelo Gaona portfolio website'
        }
    ],
    locale: 'es_ES',
    type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Angelo Gaona | Front End Developer & Back end Developer',
        description: 'Portfolio of Angelo Gaona Front End Developer',
        images: ['https://portfolio-ang.vercel.app/portada.png'],
    }
}

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
    return (
        <html lang="es">
            <body className="my-body-class">
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
