'use client'
import ComponentDevelopments from "@components/content/Developments";
// Utils
import Info from '@database/info';

const Developments = () => {
    const { pages } = Info;
    const { developments } = pages;

    if (typeof window !== 'undefined') {
        window.onbeforeunload = () => {
            window.scrollTo(0,0);
        }
    }

    return (
        <>
            <ComponentDevelopments />
            <style global jsx>
                {`
                    menu nav a[href^="${developments}"] {
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

export default Developments;