import Styles from '@styles/content/extras.module.scss';
import Link from 'next/link';
// Components
import NeonSign from '@components/effectAnimatios/NeonSign';
// Utils
import Info from '@database/info';

const Extras = () => {
    const { pages } = Info;
    const { contact } = pages;

    return (
        <section className={Styles.containerExtras}>
            <article className={Styles.descriptionExtras}>
                <h1>
                    Extras
                </h1>
                <p>
                    Esto es solo un pequeño vistazo de mi recorrido como desarrollador. Este portafolio se irá actualizando anualmente con el propósito de reflejar el camino que estaré recorriendo. Si estás interesado no dudes en contactarme.
                </p>
                <Link className={Styles.buttonContact} rel='aboutMe' href={contact}>
                    Hagamos algo grandioso.
                    <span></span>
                </Link>
                <div className={`${Styles.bar} ${Styles.barRight}`}></div>
                <div className={`${Styles.bar} ${Styles.barTop}`}></div>
                <div className={`${Styles.bar} ${Styles.barLeft}`}></div>
                <div className={`${Styles.bar} ${Styles.barBottom}`}></div>
            </article>
            <div className={Styles.animated}>
                <h2>
                    Animacion en 3D con tree.js
                </h2>
            </div>
            <NeonSign />
        </section>
    )
}

export default Extras;