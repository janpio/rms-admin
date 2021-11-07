import React from "react";
import Navbar from "./navbar";
import TopBar from "./topbar";

interface LayoutProps {
    children: React.ReactChild | React.ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="font-mono">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout;