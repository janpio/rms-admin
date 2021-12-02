import { MenuItemList, MenuAction } from 'components/menu';
import CreateMenu from 'components/menu/CreateMenu';
import type { NextPage } from 'next'
import { useState } from 'react';

const Menu: NextPage = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <section className='space-y-2 px-7'>
            <MenuAction onClick={(key) => setToggleMenu(true)} />
            <MenuItemList isShowing={true} />
            <CreateMenu isShowing={toggleMenu} closeDialogModal={() => setToggleMenu(false)} />
        </section>
    )
}

export default Menu;
