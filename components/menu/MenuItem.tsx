type MenuType = {
    name: string;
    price: number;
}
const MenuItem = (menu: MenuType) => {
    return (
        <div className='flex gap-3 px-4 py-4 shadow-sm font-semibold bg-white rounded-lg' >
            <div className='flex-auto flex-shrink'>
                <div className='bg-red-500  h-full rounded-md'>

                </div>
            </div>
            <div className='flex-auto'>
                <h1 className='text-gray-400'>Name</h1>
                <h1 className='text-red-500'>Pizza</h1>
            </div>
            <div className='flex-auto'>
                <h1 className='text-gray-400'>Price</h1>
                <h1 className='text-red-500'>1000 Kyat(s)</h1>
            </div>
            <div className='flex-auto'>
                <h1 className='text-gray-400'>Category</h1>
                <h1 className='text-red-500'>Food</h1>
            </div>
            <div className='flex-auto'>
                <h1 className='text-gray-400'>Description</h1>
                <h1 className='text-red-500'>This is made by Porlar</h1>
            </div>
            <div className='flex-auto'>
                <h1 className='text-gray-400'>Rating</h1>
                <h1 className='text-red-500'>4.5</h1>
            </div>
            <div className='flex-auto'>
                <h1 className='text-gray-400'>Total View</h1>
                <h1 className='text-red-500'>1333</h1>
            </div>
            <div className='flex-auto'>
                <h1 className='text-gray-400'>Available</h1>
                <h1 className='text-red-500'>Yes</h1>
            </div>
        </div >
    )
}

export default MenuItem;
