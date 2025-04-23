'use client'
import ComponentContact from "@components/content/Contact";
// Utils
import Info from '@database/info';

const Contact = () => {
    const { pages } = Info;
    const { contact } = pages;

    return (
        <>
            <ComponentContact />
            <style global jsx>
                {`
                    menu nav a[href^="${contact}"] {
                        color: #08fdd8 !important;
                        border-bottom: 1px solid #08fdd8 !important;
                    }
                `}
            </style>
        </>
    )
}

export default Contact;