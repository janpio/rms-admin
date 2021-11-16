import MenuItem from './MenuItem';
import { Transition } from '@headlessui/react'
import React from 'react';
import FilterMenu from './FilterMenu';

type MenuType = {
    name: string;
    price: number;
}

type MenuItemListProp = {
    isShowing: boolean
}
const MenuItemList: React.FC<MenuItemListProp> = ({ isShowing }) => {
    const menuList: Array<MenuType> = [
        {
            name: "Banana",
            price: 200
        },
        {
            name: "Apple",
            price: 200
        },
        {
            name: "Orange",
            price: 200
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        },
        {
            name: "Banana",
            price: 200
        },
        {
            name: "Apple",
            price: 200
        },
        {
            name: "Orange",
            price: 200
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        },
        {
            name: "Banana",
            price: 200
        },
        {
            name: "Apple",
            price: 200
        },
        {
            name: "Orange",
            price: 200
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        },
        {
            name: "Banana",
            price: 200
        },
        {
            name: "Apple",
            price: 200
        },
        {
            name: "Orange",
            price: 200
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        },
        {
            name: "Mango",
            price: 400
        },
        {
            name: "PipeApple",
            price: 100
        }
    ];

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
                <FilterMenu />
            </Transition.Child>
            <Transition.Child className='mt-3'>
                <div className='flex flex-wrap gap-2'>
                    {
                        menuList.map((menu, i) => (
                            <MenuItem key={i} {...menu} />
                        ))
                    }
                </div>
            </Transition.Child>
        </Transition>

    )
}

export default MenuItemList;
