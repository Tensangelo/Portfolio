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
        icon: '/favicon.jpg'
    }
}

export default function RootLayout({ children }: Readonly<{children: ReactNode}>) {
    return (
        <html lang="en">
            <body className="my-body-class">
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
