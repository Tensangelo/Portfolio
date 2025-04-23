
import Link from 'next/link';
// Components
import AnimationSnow from '@components/effectAnimatios/Snow';
// Utils
import Info from '@database/info';
// Styles
import Styles from '@styles/content/media-queries/landing.module.scss';

const Landing = () => {
    const { pages } = Info;
    const { aboutMe } = pages;

    return (
        <section className={Styles.containerWelcome}>
            <article className={Styles.AboutMeInfo}>
                <h3>Hola, mi nombre es</h3>
                <h1>Angelo Gaona.</h1>
                <p>Soy Front end / Back end developer.</p>

                <Link className={Styles.buttonAboutMe} rel='aboutMe' href={aboutMe}>
                    Mas sobre mí
                    <span></span>
                </Link>
            </article>
            <AnimationSnow />
        </section>
    )
}

export default Landing;