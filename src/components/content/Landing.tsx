
import Styles from '@styles/content/landing.module.scss'
import Link from 'next/link';
// Components
import AnimationSnow from '@components/effectAnimatios/Snow';
// Utils
import Info from '@database/info';

const Landing = () => {
    const { pages, contactRed } = Info;
    const { aboutMe } = pages;
    const { resume } = contactRed;

    return (
        <section className={Styles.containerWelcome}>
            <article className={Styles.AboutMeInfo}>
                <h3>Hola, mi nombre es</h3>
                <h1>Angelo Gaona,</h1>
                <p>Soy Front end / Back end developer.</p>

                <Link className={Styles.buttonAboutMe} rel='aboutMe' href={aboutMe}>
                    Mas sobre mí
                    <span></span>
                </Link>
            </article>
            <div className={Styles.resume}>
                <Link className={Styles.btnResume} href={resume} rel='Resume'>
                    Resume
                    <span></span>
                </Link>
            </div>
            <AnimationSnow />
        </section>
    )
}

export default Landing;