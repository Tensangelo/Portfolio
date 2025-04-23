import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Styles
import Styles from '@styles/content/media-queries/development.module.scss';
// Icons
import Icon from '@mdi/react';
import { mdiGithub, mdiOpenInNew  } from '@mdi/js';

// Utils
import DevelopmentsData from '@database/projects';

const Developments = () => {

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

            {DevelopmentsData.map((dev, index) => (
                <div key={index} className={Styles.containerWorks}>
                    <picture>
                        <Image src={dev.image} alt={dev.alt} />
                        <div className={Styles.imageWrapper}></div>
                    </picture>

                    <article className={Styles.containerinfoDev}>
                        <p className={Styles.titleinfoDev}>{dev.title}</p>
                        <h2
                            className={Styles.companyInfoDev}
                            style={{ color: dev.colorCompany }}
                        >
                            {dev.company}
                        </h2>
                        <p className={Styles.infoDev}>
                            {dev.description.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                        <ul className={Styles.infoTechnologies}>
                            {dev.technologies.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>

                        {dev.links && (
                            <ul className={Styles.iconsRepositories}>
                                {dev.links.github && (
                                    <li>
                                        <Link href={dev.links?.github} rel='MyGithub' target='_blank'>
                                            <Icon path={mdiGithub} size='3rem' color='#8b969b' />
                                        </Link>
                                    </li>
                                )}
                                {dev.links.page && (
                                    <li>
                                        <Link href={dev.links.page} rel='MyGithub' target='_blank'>
                                            <Icon path={mdiOpenInNew} size='3rem' color='#8b969b' />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        )}
                    </article>

                    <div className={`${Styles.bar} ${Styles.barLeft}`}></div>
                    <div className={`${Styles.bar} ${Styles.barTop}`}></div>
                    <div className={`${Styles.bar} ${Styles.barRight}`}></div>
                    <div className={`${Styles.bar} ${Styles.barBottom}`}></div>
                </div>
            ))}
        </section>
    )
}

export default Developments;