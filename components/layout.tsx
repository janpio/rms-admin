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
            <main className="container w-4/5">
                {children}
            </main>
        </div>
    )
}
export default Layout;