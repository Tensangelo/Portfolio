import React from "react";
// Components
// import Header from '@components/header/Navbar';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
    return (
        <>
            {/* <Header /> */}
            {children}
        </>
    )
}

export default Layout;