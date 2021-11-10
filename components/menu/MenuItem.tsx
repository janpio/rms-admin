type MenuType = {
    name: string;
    price: number;
}
const MenuItem = (menu: MenuType) => {
    return (
        <div className="rounded-md border w-48">
            <div className='bg-yellow-500 h-36 rounded-t-md'>

            </div>
            <div className='p-1'>
                <h3>{menu.name}</h3>
                <p>{menu.price}</p>
            </div>

        </div>
    )
}

export default MenuItem;
