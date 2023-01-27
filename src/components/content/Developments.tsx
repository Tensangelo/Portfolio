import Styles from '@styles/content/development.module.scss';
import Image from 'next/image';
// Images
import veranoPage from '@images/works/verano.png'
import timeTracker from '@images/works/timeTracker.jpg'
import MangmentUser from '@images/works/managmentUser.png'

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
            <div className={Styles.containerWorks}>
                <picture>
                    <Image
                        src={veranoPage}
                        alt='Interfaz pagina verano'
                    />
                    <div className={Styles.imageWrapper}></div>
                </picture>
                <article className={Styles.containerinfoDev}>
                    <p className={Styles.titleinfoDev}>
                        Página Web Corporativa
                    </p>
                    <p className={Styles.infoDev}>
                        Una página web enfocada en informar y destacar los productos, servicios, valores, objetivos y detalles de la entidad.
                        <br />
                        <br />
                        Desarrollada de forma progresiva con responsive y mejoras en diseño para el uso interactivo de su uso informativo.
                    </p>
                    <ul>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Sass</li>
                        <li>Responsive Design</li>
                        <li>Styled Components</li>
                    </ul>
                </article>
                <div className={`${Styles.bar} ${Styles.barLeft}`}></div>
                <div className={`${Styles.bar} ${Styles.barTop}`}></div>
                <div className={`${Styles.bar} ${Styles.barRight}`}></div>
                <div className={`${Styles.bar} ${Styles.barBottom}`}></div>
            </div>
            <div className={Styles.containerWorks}>
                <picture>
                    <Image
                        src={timeTracker}
                        alt='Interfaz time tracker'
                    />
                    <div className={Styles.imageWrapper}></div>
                </picture>
                <article className={Styles.containerinfoDev}>
                    <p className={Styles.titleinfoDev}>
                        Time Tracking
                    </p>
                    <p className={Styles.infoDev}>
                        Un aplicativo web con la principal función de registrar las horas de trabajo de los empleados, con la posibilidad de recopilar fechas, grupos, proyectos, países, entre otros datos del registro de tiempo.
                        <br />
                        <br />
                        Entrega de informes como presupuesto de proyectos, gestión de proyectos, nómina y análisis de productividad.
                    </p>
                    <ul>
                        <li>React.js</li>
                        <li>Typescript</li>
                        <li>Next.js</li>
                        <li>Nest.js</li>
                        <li>GraphQL</li>
                        <li>PostgreSql</li>
                    </ul>
                </article>
                <div className={`${Styles.bar} ${Styles.barLeft}`}></div>
                <div className={`${Styles.bar} ${Styles.barTop}`}></div>
                <div className={`${Styles.bar} ${Styles.barRight}`}></div>
                <div className={`${Styles.bar} ${Styles.barBottom}`}></div>
            </div>
            <div className={Styles.containerWorks}>
                <picture>
                    <Image
                        src={MangmentUser}
                        alt='Interfaz time tracker'
                    />
                    <div className={Styles.imageWrapper}></div>
                </picture>
                <article className={Styles.containerinfoDev}>
                    <p className={Styles.titleinfoDev}>
                        Administrador de usuarios
                    </p>
                    <p className={Styles.infoDev}>
                        Aplicativo web que permite la creación, visualización y modificación de usuarios, así como también la eliminación de los mismos.
                        <br />
                        <br />
                        Búsqueda de usuarios por Id´s, paginación y límite de registros por página.
                    </p>
                    <ul>
                        <li>React.js</li>
                        <li>Typescript</li>
                        <li>Next.js</li>
                        <li>API services</li>
                        <li>Sass</li>
                        <li>Material Ui</li>
                    </ul>
                </article>
                <div className={`${Styles.bar} ${Styles.barLeft}`}></div>
                <div className={`${Styles.bar} ${Styles.barTop}`}></div>
                <div className={`${Styles.bar} ${Styles.barRight}`}></div>
                <div className={`${Styles.bar} ${Styles.barBottom}`}></div>
            </div>
        </section>
    )
}

export default Developments;