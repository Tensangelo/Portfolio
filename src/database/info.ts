import cv from '../../documents/cv.pdf';

const Urls = {
    pages: {
        aboutMe: '/AboutMe',
        developments: '/Developments',
        contact: '/Contact',
        extras: '/Extras'
    },
    contactRed: {
        linkedin: 'https://www.linkedin.com/in/angelo-gaona/',
        github: 'https://github.com/Tensangelo',
        codePen: 'https://codepen.io/Tensangelo',
        correo: '/',
        resume: cv,
    },
    repositories: {
        managmentUser: {
            gitHub: 'https://github.com/Tensangelo/ManagementUser',
            page: 'https://user-manager-ang.vercel.app/',
        },
        nival: {
            page: 'https://www.niyval.com/'
        }
    }
}

export default Urls;