// Images
import veranoPage from '@images/works/verano.png';
import timeTracker from '@images/works/timeTracker.jpg';
import nivalPage from '@images/works/nival.png';
// Utils
import Info from '@database/info';
import { Development } from '@type/types';

const { repositories } = Info;
const { verano, nival } = repositories;

const DevelopmentsData: Development[] = [
    {
        company: 'Nival',
        colorCompany: '#ffffff',
        isProjectNew: true,
        title: 'Landing Page de Presentación',
        description: `Diseñé y desarrollé una landing page para Nival, una marca emergente que buscaba una presencia digital simple pero con carácter.

            El enfoque fue minimalista: manteniendo una experiencia visual atractiva enfocado en la experiencia del usuario y optimizado para distintos dispositivos.`,
        technologies: ['Astro.js', 'React.js', 'Sass', 'Responsive Design', 'Animation Design'],
        image: nivalPage,
        alt: 'Interfaz pagina nival',
        links: {
            page: nival.page
        }
    },
    {
        company: 'Verano Ingenieria',
        colorCompany: '#ca4c30',
        title: 'Página Web Corporativa',
        description: `Una página web enfocada en informar y destacar los productos, servicios, valores, objetivos y detalles de la entidad.

            Desarrollada de forma progresiva con responsive y mejoras en diseño para el uso interactivo de su uso informativo.`,
        technologies: ['React.js', 'Next.js', 'Sass', 'Responsive Design', 'Styled Components'],
        image: veranoPage,
        alt: 'Interfaz pagina verano',
        links: {
            page: verano.page
        }
    },
    {
        company: 'Verano Ingenieria',
        colorCompany: '#ca4c30',
        title: 'Time Tracking',
        description: `Un aplicativo web con la principal función de registrar las horas de trabajo de los empleados, con la posibilidad de recopilar fechas, grupos, proyectos, países, entre otros datos del registro de tiempo.

            Entrega de informes como presupuesto de proyectos, gestión de proyectos, nómina y análisis de productividad.`,
        technologies: ['React.js', 'Typescript', 'Next.js', 'Nest.js', 'GraphQL', 'PostgreSql'],
        image: timeTracker,
        alt: 'Interfaz time tracker',
    },
];

export default DevelopmentsData;