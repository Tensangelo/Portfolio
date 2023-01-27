import ComponentAboutMe from '@components/content/AboutMe';

// Utils
import Info from '@database/info';

const AboutMe = () => {

    const { pages } = Info;
    const { aboutMe, developments, contact, extras } = pages;

    return (
        <>
            <ComponentAboutMe />
            <style global jsx>
            {`
                menu nav a[href^="${aboutMe}"] {
                    color: #08fdd8;
                    border-bottom: 1px solid #08fdd8;
                }
            `}
            </style>
        </>

    )
}

export default AboutMe;