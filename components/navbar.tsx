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
        {
            name: 'Order Live',
            href: '/orderlive',
        },
    ]
    return (
        <>
            <div className='py-3'>
                <div className='text-center'>
                    <h1 className='font-bold text-gray-800 text-2xl tracking-wide'>Restaurant Management System</h1>
                </div>
                <ul className='flex justify-center text-xl gap-3 text-gray-700 mt-3 border-b pb-3'>
                    {
                        navlist.map((nav, i) => {
                            const active = asPath === nav.href;
                            const className = nav.href === '/orderlive' ?
                                (asPath === '/orderlive' ?
                                    ('border-red-500 border px-5 shadow-md rounded-md hover:bg-red-500 hover:text-white')
                                    :
                                    ('border-red-500 border px-5 shadow-md text-red-500 rounded-md hover:bg-red-500 hover:text-white')
                                )
                                : 'rounded-md px-2 hover:bg-red-500 hover:text-white';
                            return (
                                <React.Fragment key={i}>
                                    <li className={active ? classNames(className, 'bg-red-500 text-white') : className}>
                                        <Link href={nav.href}>{nav.name}</Link>
                                    </li>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default Navbar;