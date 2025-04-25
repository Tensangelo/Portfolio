'use client'

import React from "react";
// Components
import ComponentDevelopments from "@components/content/Developments";
// Styles
import Styles from '@styles/content/media-queries/development.module.scss';
// Utils
import Info from '@database/info';
import DevelopmentsData from '@database/projects';


const Developments = () => {
    const { pages } = Info;
    const { developments } = pages;

    if (typeof window !== 'undefined') {
        window.onbeforeunload = () => {
            window.scrollTo(0,0);
        }
    }

    return (
        <section className={Styles.contianerDevs}>
            <article className={Styles.contentTitle}>
                <h1>
                    Algunas cosas que he construido
                    <span></span>
                    <span></span>
                    <span></span>
                </h1>
            </article>

            {DevelopmentsData.map((dev, index) => {
                return (
                    <ComponentDevelopments key={index} {...dev} />
                )
            })}
            <style global jsx>
                {`
                    menu nav a[href^="${developments}"] {
                        color: #08fdd8 !important;
                        border-bottom: 1px solid #08fdd8 !important;
                    }
                    @media (min-width: 1025px) {
                        #btnResume {
                            display: none;
                        }
                    }
                `}
            </style>
        </section>
    )
}

export default Developments;