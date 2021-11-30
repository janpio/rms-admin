import React from "react";
import Navbar from "./navbar";
import TopBar from "./topbar";

interface LayoutProps {
    children: React.ReactChild | React.ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex bg-white text-base font-popin'>
            <Navbar className='sticky top-0 left-0 px-2 w-44' />
            <main className='flex flex-col flex-1 bg-secondary shadow-sm'>
                <TopBar />
                <section className='px-3 mb-4' style={{ minHeight: '83vh' }}>
                    {children}
                </section>

            </main>
        </div>
    )
}
export default Layout;