// Images
import veranoPage from '@images/works/verano.png'
import timeTracker from '@images/works/timeTracker.jpg'
import MangmentUser from '@images/works/managmentUser.png'
// Utils
import Info from '@database/info';

const { repositories } = Info;
const { managmentUser } = repositories;
const { gitHub, page } = managmentUser

const DevelopmentsData = [
    {
        title: 'Página Web Corporativa',
        description: `Una página web enfocada en informar y destacar los productos, servicios, valores, objetivos y detalles de la entidad.

            Desarrollada de forma progresiva con responsive y mejoras en diseño para el uso interactivo de su uso informativo.`,
        technologies: ['React.js', 'Next.js', 'Sass', 'Responsive Design', 'Styled Components'],
        image: veranoPage,
        alt: 'Interfaz pagina verano',
    },
    {
        title: 'Time Tracking',
        description: `Un aplicativo web con la principal función de registrar las horas de trabajo de los empleados, con la posibilidad de recopilar fechas, grupos, proyectos, países, entre otros datos del registro de tiempo.

            Entrega de informes como presupuesto de proyectos, gestión de proyectos, nómina y análisis de productividad.`,
        technologies: ['React.js', 'Typescript', 'Next.js', 'Nest.js', 'GraphQL', 'PostgreSql'],
        image: timeTracker,
        alt: 'Interfaz time tracker',
    },
    {
        title: 'Administrador de usuarios',
        description: `Aplicativo web que permite la creación, visualización y modificación de usuarios, así como también la eliminación de los mismos.

            Búsqueda de usuarios por Id´s, paginación y límite de registros por página.`,
        technologies: ['React.js', 'Typescript', 'Next.js', 'API services', 'Sass', 'Material Ui'],
        image: MangmentUser,
        alt: 'Interfaz administrador de usuarios',
        links: {
            github: gitHub,
            page: page
        }
    }
];

export default DevelopmentsData;