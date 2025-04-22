import Styles from '@styles/content/media-queries/aboutme.module.scss';

const AboutMe = () => {

    const Technologies = [
        'JavaScript (ES6+)',
        'Node.js',
        'React',
        'Next.js',
        'Nest.js',
        'Express.js',
        'Sass',
        'Astro',
        'Tailwind',
        'PostgreSql',
        'Mongo db',
        'Graphql',
    ];

    return (
        <section className={Styles.containerAboutMe}>
            <article className={Styles.AboutMeInfo}>
                <h1>¿Qué quien soy?</h1>
                <p>
                    Soy un desarrollador front-end y back-end. Tengo pasión por la creación de interfaces de usuario, la animación y desarrollos de herramientas creativas y dinámicas.
                </p>
                <p>
                    Soy una persona determinada, versátil para los trabajos grupales como en solitario, con gran atención a los detalles y atraído a los grandes retos. Amante de los videojuegos con la meta de crear y desarrollar uno.
                </p>
                <p>
                    Mi enfoque principal actualmente es el desarrollo de interfaces visuales que promuevan la experiencia de usuarios y la mejora de herramientas en pro de la innovación.
                </p>
                <div className={`${Styles.bar} ${Styles.barRight}`}></div>
                <div className={`${Styles.bar} ${Styles.barTop}`}></div>
                <div className={`${Styles.bar} ${Styles.barLeft}`}></div>
                <div className={`${Styles.bar} ${Styles.barBottom}`}></div>
            </article>
            <div className={Styles.AboutTechnologies}>
                <h2>Estas son algunas tecnologías en las que suelo trabajar:</h2>
                <ul>
                    {Technologies.map((data, i) => {
                        return (
                            <li key={i}>{data}</li>
                        )
                    })}
                </ul>
                <div className={`${Styles.bar} ${Styles.barLeft}`}></div>
                <div className={`${Styles.bar} ${Styles.barTop}`}></div>
                <div className={`${Styles.bar} ${Styles.barRight}`}></div>
                <div className={`${Styles.bar} ${Styles.barBottom}`}></div>
            </div>
        </section>
    )
}

export default AboutMe;