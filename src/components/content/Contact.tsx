import React, { useState } from 'react';
import Link from 'next/link';
// Styles
import Styles from '@styles/content/media-queries/contact.module.scss';
// Emailjs
import { sendForm } from '@emailjs/browser';
// Icons
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiCodepen, mdiLoading } from '@mdi/js';
// Utils
import Info from '@database/info';

const Contact = () => {
    const { contactRed } = Info;
    const { linkedin, github, codePen } = contactRed;

    const [ isLoading, setIsLoading ] = useState(false);
    const [ status, setStatus ] = useState<string>();
    const [ response, setResponse ] = useState('');

    const ResponseNegative = 'Ha ocurrido un problema al enviar el mensaje, por favor intente de nuevo. Si el problema persiste, comuníquese al correo: ang-dev@hotmail.com'

    const sendEmail =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        sendForm(
            'service_txjonzf',
            'template_vweqp19',
            e.currentTarget,
            'E1piUr6jnu8XGjBUi'
        )
        .then((response) => {
            setStatus(response.status.toString());
            setResponse('Mensaje enviado');
            setIsLoading(false);

        })
        .catch((err) => {
            setStatus(err);
            setResponse(ResponseNegative);
            setIsLoading(false);
        });
        e.currentTarget.reset();
    }

    status !== undefined && console.log(status);

    return (
        <section className={Styles.containerContact}>
            <div className={Styles.infoContact}>
                <article className={Styles.descriptionContact}>
                    <h1>Ponte en contacto</h1>
                    <p>
                        Estoy en búsqueda de retos y oportunidades de formar parte de grandes proyectos.
                        Si deseas saber más sobre, si tienes alguna petición o pregunta, envíame un mensaje.
                    </p>
                </article>
                <p className={Styles.messageResponse}>
                    {response}
                </p>
                <form className={Styles.formsMessage} onSubmit={sendEmail}>
                    <div className={Styles.containerInputs}>
                        <input
                            id='Name'
                            name='user_name'
                            type={'text'}
                            placeholder='Nombres'
                            autoComplete='off'
                            disabled={isLoading}
                            required
                        />
                        <label htmlFor='Name'></label>
                    </div>
                    <div className={Styles.containerInputs}>
                        <input
                            id='Email'
                            name='user_email'
                            type={'email'}
                            placeholder='Correo'
                            autoComplete='off'
                            disabled={isLoading}
                            required
                        />
                        <label htmlFor='Email'></label>
                    </div>
                    <div className={Styles.containerInputs}>
                        <textarea
                            id='Message'
                            name='message'
                            placeholder='Mensaje'
                            autoComplete='off'
                            disabled={isLoading}
                            required
                        />
                        <label htmlFor='Message'></label>
                    </div>
                    <div className={Styles.containerBtnSubmit}>
                        {isLoading ? (
                            <button className={Styles.btnSubmit} type='submit' disabled>
                                <Icon
                                    title={'Icon loading'}
                                    path={mdiLoading}
                                    size={'2rem'}
                                />
                                <span></span>
                            </button>
                        ) : (
                            <button className={Styles.btnSubmit} type='submit'>
                                Enviar
                                <span></span>
                            </button>
                        )}
                    </div>
                </form>
            </div>
            <div className={Styles.infoSocial}>
                <article>
                    <h2>También me puedes buscar en:</h2>
                </article>
                <ul>
                    <li className={Styles.btnGithub}>
                        <span>Github</span>
                        <Link href={github} rel='MyGithub' target='_blank'>
                            <Icon
                                path={mdiGithub}
                                size={'3.5rem'}
                            />
                        </Link>
                    </li>
                    <li className={Styles.btnLinkedin}>
                        <span>Linkedin</span>
                        <Link href={linkedin} rel='MyGithub' target='_blank'>
                            <Icon
                                path={mdiLinkedin}
                                size={'3.5rem'}
                            />
                        </Link>
                    </li>
                    <li className={Styles.btnCodePen}>
                        <span>CodePen</span>
                        <Link href={codePen} rel='MyGithub' target='_blank'>
                            <Icon
                                path={mdiCodepen}
                                size={'3.5rem'}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;