import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Styles
import Styles from '@styles/content/media-queries/development.module.scss';
// Icons
import Icon from '@mdi/react';
import { mdiGithub, mdiOpenInNew } from '@mdi/js';
// Types
import { Development } from '@type/types';
import { NewSign } from '@components/effectAnimatios/newSign';

type ComponentDevelopmentsProps = Development;

const Developments = ({
    company,
    title,
    isProjectNew,
    description,
    technologies,
    image,
    alt,
    colorCompany,
    links
}: ComponentDevelopmentsProps) => {
    return (
        <div className={Styles.containerWorks}>
            <picture>
                <Image src={image} alt={alt} />
                <div className={Styles.imageWrapper}></div>
            </picture>

            <article className={Styles.containerinfoDev}>
                <p className={Styles.titleinfoDev}>
                    {isProjectNew && (
                        <NewSign label='✨ ' />
                    )}
                    {title}
                </p>
                <h2
                    className={Styles.companyInfoDev}
                    style={{ color: colorCompany }}
                >
                    {company}
                </h2>
                <p className={Styles.infoDev}>
                    {description.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>

                <ul className={Styles.infoTechnologies}>
                    {technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>

                {links && (
                    <ul className={Styles.iconsRepositories}>
                        {links.github && (
                            <li>
                                <Link href={links.github} rel='MyGithub' target='_blank'>
                                    <Icon path={mdiGithub} size='3rem' color='#8b969b' />
                                </Link>
                            </li>
                        )}
                        {links.page && (
                            <li>
                                <Link href={links.page} rel='MyGithub' target='_blank'>
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
    )
}

export default Developments;