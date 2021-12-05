import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { classNames } from "utli";
import { Dashboard, MenuBook, TableRestaurant, FormatListNumbered, Logout } from "@mui/icons-material";

type NavbarProps = {
    className: string;
}
const Navbar = ({ className }: NavbarProps) => {
    const { asPath } = useRouter();
    const navlist = [
        {
            name: 'Dashboard',
            href: '/',
            icon: <Dashboard fontSize={'small'} />
        },
        {
            name: 'Menu Book',
            href: '/menu',
            icon: <MenuBook fontSize={'small'} />
        },
        {
            name: 'Tables',
            href: '/table',
            icon: <TableRestaurant fontSize={'small'} />
        },
        {
            name: 'Order History',
            href: '/order',
            icon: <FormatListNumbered fontSize={'small'} />
        },
    ]
    return (
        <div>
            <div className={classNames(className)} >
                <h1 className='py-7 text-center text-2xl font-bold tracking-widest'>Restaurant</h1>
                <ul className='flex flex-col justify-center text-lg gap-1 text-gray-700 ' style={{ minHeight: '83vh' }}>
                    {/* <li className='mb-3 text-center text-base border-red-500 border-r border-l py-1 shadow-md text-red-500 rounded-sm hover:bg-red-500 hover:text-white'>
                    <Link href='/orderlive'>
                        <a className='block'>Order live</a>
                    </Link>
                </li> */}
                    {
                        navlist.map((nav, i) => {
                            const active = asPath === nav.href;
                            const className = 'text-left border border-white rounded-md py-1 py-1hover:border-red-500 hover:text-red-500 hover:border-red-500 text-base';
                            return (
                                <React.Fragment key={i}>
                                    <li className={active ? classNames(className, "border border-red-500 text-red-500") : className}>
                                        <Link href={nav.href} passHref>
                                            <div className='flex items-center px-2 cursor-pointer'>
                                                {nav.icon}
                                                <a className='pl-2'>{nav.name}</a>
                                            </div>

                                        </Link>
                                    </li>
                                </React.Fragment>
                            )
                        })
                    }
                    <div className='flex-grow'></div>
                    <div className='flex items-center px-2 cursor-pointer text-base'>
                        <Logout fontSize='small' />
                        <a className='pl-2'>LOGOUT</a>
                    </div>
                </ul>

            </div>
        </div>

    )
}
export default Navbar;