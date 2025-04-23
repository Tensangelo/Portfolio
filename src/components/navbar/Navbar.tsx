'use client'

import React, { useRef } from 'react';
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
    const navToggleRef = useRef<HTMLInputElement>(null);

    const { pages, contactRed } = Info;
    const { aboutMe, developments, contact, extras } = pages;
    const { linkedin, github, resume } = contactRed;

    const handleCloseMenu = () => {
        if (navToggleRef.current) {
            navToggleRef.current.checked = false;
        }
    };

    return (
        <>
            <input ref={navToggleRef} id='switchNav' className={Style.switch} type={'checkbox'} />
            <div className={Style.switchNav}>
                <label htmlFor='switchNav'>
                    <span></span>
                </label>
            </div>
            <menu className={Style.containerMenu}>
                <div className={Style.containerLogo}>
                    <Link rel='home' href={'/'} onClick={handleCloseMenu}>
                        <Image
                            alt='Logo personal'
                            src={Logo}
                            priority={true}
                        />
                    </Link>
                </div>
                <nav>
                    <Link rel='aboutMe' href={aboutMe} onClick={handleCloseMenu}>
                        Acerca de mí
                    </Link>
                    <Link rel='developments' href={developments} onClick={handleCloseMenu}>
                        Desarrollos
                    </Link>
                    <Link rel='contact' href={contact} onClick={handleCloseMenu}>
                        Contacto
                    </Link>
                    <Link rel='extras' href={extras} onClick={handleCloseMenu}>
                        Extras
                    </Link>
                    <div id='btnResume' className={Style.resume}>
                        <Link className={Style.btnResume} href={resume} rel='Resume' target={'_blank'}>
                            <p>Resume</p>
                        </Link>
                    </div>
                </nav>
                <section className={Style.IconsSocial}>
                    <Link href={linkedin} rel='MyLinkedin' target='_blank' aria-label='Dirigir al perfil de linkedin'>
                        <Icon
                            path={mdiLinkedin}
                            size={'3rem'}
                            color='#8b969b'
                        />
                    </Link>
                    <Link href={github} rel='MyGithub' target='_blank' aria-label='Dirigir al perfil de github'>
                        <Icon
                            path={mdiGithub}
                            size={'3rem'}
                            color='#8b969b'
                        />
                    </Link>
                </section>
            </menu>
        </>
    )
}

export default Navbar;