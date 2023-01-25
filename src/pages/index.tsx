import React from "react";
import Head from "next/head";
// Components
import Landing from "@components/content/Landing";

const Home = () => {
    return (
        <>
            <Head>
                <title>Angelo Gaona</title>
                <meta name="Portafolio" content="Portfolio Angelo Gaona Front End Developer" />
                <link rel="icon" href="/favicon.jpg" />
            </Head>
            <Landing />
        </>
    )
}

export default Home;