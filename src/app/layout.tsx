import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// Styles
import '../styles/global.scss';
// Components
import Layout from '@components/Layout';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-inter',
    display: 'swap',
});

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
        description: 'Portafolio moderno que muestra las habilidades en desarrollo web, proyectos y experiencia de Angelo Gaona.',
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
        <html lang="es" className={`${inter.variable}`}>
            <body className="my-body-class">
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
