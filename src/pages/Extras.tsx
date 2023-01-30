import ComponentsExtras from '@components/content/Extras';
// Utils
import Info from '@database/info';

const Extras = () => {
    const { pages } = Info;
    const { extras } = pages;

    return (
        <>
            <ComponentsExtras />
            <style global jsx>
                {`
                    menu nav a[href^="${extras}"] {
                        color: #08fdd8;
                        border-bottom: 1px solid #08fdd8;
                    }
                `}
            </style>
        </>
    )
}

export default Extras;