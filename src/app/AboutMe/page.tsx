'use client'
import ComponentAboutMe from '@components/content/AboutMe';

// Utils
import Info from '@database/info';

const AboutMe = () => {

    const { pages } = Info;
    const { aboutMe } = pages;

    return (
        <>
            <ComponentAboutMe />
            <style global jsx>
            {`
                menu nav a[href^="${aboutMe}"] {
                    color: #08fdd8 !important;
                    border-bottom: 1px solid #08fdd8 !important;
                }
                @media (min-width: 1025px) {
                    #btnResume {
                        display: none;
                    }
                }
            `}
            </style>
        </>

    )
}

export default AboutMe;