import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
    children: React.ReactChild | React.ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex">
            <div className="bg-red-100 w-1/6">
                <Navbar />
            </div>

            <main className='bg-green-100 w-5/6'>{children}</main>
        </div>
    )
}
export default Layout;