import React from "react";
import Navbar from "./navbar";
import TopBar from "./topbar";

interface LayoutProps {
    children: React.ReactChild | React.ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="font-mono bg-white mb-4">
            <div className='mt-5 text-center bg-white'>
                <h1 className='font-bold text-gray-800 text-2xl tracking-wide'>Restaurant Management System</h1>
            </div>
            <Navbar />
            <main className="container w-4/5">
                {children}
            </main>
        </div>
    )
}
export default Layout;