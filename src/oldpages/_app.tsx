import '../styles/global.scss'
import type { AppProps } from 'next/app';
import Head from "next/head";
// Components
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Angelo Gaona</title>
          <meta name="Portafolio" content="Portfolio Angelo Gaona Front End Developer" />
          <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;