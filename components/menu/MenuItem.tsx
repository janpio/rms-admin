import { Delete, Edit, Update } from "@mui/icons-material";
import Menu from "models/Menu";
import Image from 'next/image'
const MenuItem = (menu: Menu) => {
    return (
        <div className='flex gap-3 px-3 py-4 shadow-sm font-semibold bg-white rounded-lg' >
            <div className='flex-1 w-10 flex-shrink'>
                <div className='bg-red-500 w-20 h-full rounded-md'>
                    <div className='rounded-md relative w-full h-full overflow-hidden'>
                        <Image
                            layout='fill'
                            objectFit='cover'
                            src={menu.menu_image}
                            alt='menu image' />
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Name</h1>
                <h1 className='text-red-500'>{menu.name}</h1>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Price</h1>
                <h1 className='text-red-500'>{menu.price} Kyat(s)</h1>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Category</h1>
                <h1 className='text-red-500'>{menu.categories.name}</h1>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Description</h1>
                <h1 className='text-red-500 truncate'>{menu.description}</h1>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Rating</h1>
                <h1 className='text-red-500'>{menu.rating}</h1>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Total View</h1>
                <h1 className='text-red-500'>{menu.view_count}</h1>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Available</h1>
                <h1 className='text-red-500'>{menu.is_available ? "YES" : "NO"}</h1>
            </div>
            <div className='flex-1'>
                <h1 className='text-gray-400'>Action</h1>
                <h1 className='text-red-500 mt-1 '><Edit fontSize='small' />   <Delete fontSize='small' /></h1>
            </div>
        </div >
    )
}

export default MenuItem;
