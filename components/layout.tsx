import React from "react";
import Navbar from "./navbar";
import TopBar from "./topbar";

interface LayoutProps {
    children: React.ReactChild | React.ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="font-mono hideScrollBar bg-white mb-4">
            <div className='my-5 text-center bg-white border-b pb-5'>
                <h1 className='font-bold text-gray-800 text-2xl tracking-wide'>Restaurant Management System</h1>
            </div>
            <div className='flex'>
                <div className='w-40 mx-auto'>
                    <Navbar />
                </div>
                <main className='flex-1 px-3'>
                    {children}
                </main>
            </div>

        </div>
    )
}
export default Layout;