import MenuItem from './MenuItem';

type MenuType = {
    name: string;
    price: number;
}
const MenuItemList = () => {
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
        <div className='flex flex-wrap gap-2'>
            {
                menuList.map((menu, i) => (
                    <MenuItem key={i} {...menu} />
                ))
            }
        </div>
    )
}

export default MenuItemList;
