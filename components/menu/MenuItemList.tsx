import MenuItem from './MenuItem';
import { Transition } from '@headlessui/react'
import React, { useState } from 'react';
import FilterMenu from './FilterMenu';
import CreateMenu from './CreateMenu';
import useSWR from "swr";
import { fetcher } from "utli";
import { baseURL } from "config";
import Menu from 'models/Menu';



type MenuItemListProp = {
    isShowing: boolean
}
const MenuItemList: React.FC<MenuItemListProp> = ({ isShowing }) => {
    const [visibleCreateMenu, setVisibleCreateMenu] = useState(false);
    const { data: Menus, error } = useSWR<Menu[]>(baseURL + '/api/menus', fetcher);

    return (
        <Transition
            appear={true}
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Transition.Child>
                <FilterMenu onClickCreate={() => setVisibleCreateMenu(true)} />
            </Transition.Child>
            <Transition.Child>
                <CreateMenu isShowing={visibleCreateMenu} closeDialogModal={() => setVisibleCreateMenu(false)} />
            </Transition.Child>
            <Transition.Child className='mt-3'>
                <div className='flex flex-col gap-3'>
                    {
                        Menus && Menus.map((menu, i) => (
                            <MenuItem key={i} {...menu} />
                        ))
                    }
                </div>
            </Transition.Child>
        </Transition>

    )
}

export default MenuItemList;
