import React from "react";
// Components
import Navbar from '@components/navbar/Navbar';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout;