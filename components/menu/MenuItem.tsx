type MenuType = {
    name: string;
    price: number;
}
const MenuItem = (menu: MenuType) => {
    return (
        <div className="bg-yellow-500 p-5">
            <h3>{menu.name}</h3>
            <p>{menu.price}</p>

        </div>
    )
}

export default MenuItem;
