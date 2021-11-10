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
        <div className='mb-5 sticky top-0 z-10 py-5 bg-white shadow-sm border-b'>
            <ul className='flex justify-center text-lg gap-3 text-gray-700'>
                {
                    navlist.map((nav, i) => {
                        const active = asPath === nav.href;
                        const className = nav.href === '/orderlive' ?
                            (asPath === '/orderlive' ?
                                ('border-red-500 border px-5 py-1 shadow-md rounded-md hover:bg-red-500 hover:text-white')
                                :
                                ('border-red-500 border px-5 py-1 shadow-md text-red-500 rounded-md hover:bg-red-500 hover:text-white')
                            )
                            : 'rounded-md px-2 py-1 hover:bg-red-500 hover:text-white';
                        return (
                            <React.Fragment key={i}>
                                <li>
                                    <Link href={nav.href}>
                                        <a className={active ? classNames(className, 'bg-red-500 text-white') : className}>{nav.name}</a>
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