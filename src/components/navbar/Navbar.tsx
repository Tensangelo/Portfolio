import Link from 'next/link';
import Image from 'next/image';
import Style from '@styles/navbar/navbar.module.scss';
// Icon
import Logo from '@images/logo.png'
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin } from '@mdi/js';
// Utils
import Info from '@database/info';

const Navbar = () => {

    const { pages, contactRed } = Info;
    const { aboutMe, developments, contact, extras } = pages;
    const { linkedin, github } = contactRed;

    return (
        <menu className={Style.containerMenu}>
            <div className={Style.containerLogo}>
                <Link rel='home' href={'/'}>
                    <Image
                        alt='Logo personal'
                        src={Logo}
                        priority={true}
                    />
                </Link>
            </div>
            <nav>
                <Link rel='home' href={aboutMe}>
                    Acerca de mí
                </Link>
                <Link rel='home' href={developments}>
                    Desarrollos
                </Link>
                <Link rel='home' href={contact}>
                    Contacto
                </Link>
                <Link rel='home' href={extras}>
                    Extras
                </Link>
            </nav>
            <section className={Style.IconsSocial}>
                <Link href={linkedin} rel='MyLinkedin' target='_blank'>
                    <Icon
                        title={'Icon linkedin'}
                        path={mdiLinkedin}
                        size={'3rem'}
                        color='#8b969b'
                    />
                </Link>
                <Link href={github} rel='MyGithub' target='_blank'>
                    <Icon
                        title={'Icon github'}
                        path={mdiGithub}
                        size={'3rem'}
                        color='#8b969b'
                    />
                </Link>
            </section>
        </menu>
    )
}

export default Navbar;