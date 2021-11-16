import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { classNames } from "utli/Utlities";

const Navbar = () => {
    const { asPath } = useRouter();
    const navlist = [
        {
            name: 'Dashboard',
            href: '/',
            as: 'dashboard'
        },
        {
            name: 'Menu',
            href: '/menu'
        },
        {
            name: 'Table',
            href: '/table'
        },
        {
            name: 'Order',
            href: '/order'
        },
    ]
    return (
        <div className='sticky top-0 z-10 bg-white shadow-sm border-r pt-3 px-1'>
            <ul className='flex flex-col justify-center items-stretch text-center text-lg gap-1 text-gray-700'>
                <li className='mb-3'>
                    <Link href='/orderlive'>
                        <a className="border-red-500 block border-r border-l py-1 shadow-md text-red-500 rounded-sm hover:bg-red-500 hover:text-white">Order Live</a>
                    </Link>
                </li>
                {
                    navlist.map((nav, i) => {
                        const active = asPath === nav.href;
                        const className = 'rounded-md py-1 block hover:bg-red-500 hover:text-white';
                        return (
                            <React.Fragment key={i}>
                                <li>
                                    <Link href={nav.href}>
                                        <a className={active ? classNames(className, "bg-red-500 text-white") : className}>{nav.name}</a>
                                    </Link>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Navbar;