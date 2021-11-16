import { MenuItemList, MenuAction } from 'components/menu';
import CreateMenu from 'components/menu/CreateMenu';
import type { NextPage } from 'next'
import { useState } from 'react';

const Menu: NextPage = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='space-y-2'>
            <MenuAction onClick={(key) => setToggleMenu(!toggleMenu)} />
            <MenuItemList isShowing={!toggleMenu} />
            <CreateMenu isShowing={toggleMenu} />
        </div>
    )
}

export default Menu;
