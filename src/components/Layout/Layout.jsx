import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;