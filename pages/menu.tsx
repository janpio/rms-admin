import { MenuItemList, FilterMenu, MenuAction } from 'components/menu';
import type { NextPage } from 'next'

const Menu: NextPage = () => {
    return (
        <div className='space-y-2'>
            <FilterMenu />
            <MenuItemList />
            <MenuAction />
        </div>
    )
}

export default Menu;
