import Link from "next/link";
const Navbar = () => {
    return (
        <>
            <div className='py-3'>
                <div className='text-center'>
                    <h1 className='font-bold text-gray-800 text-2xl tracking-wide'>Restaurant Management System</h1>
                </div>
                <ul className='flex justify-center text-xl gap-3 text-gray-700 mt-3 border-b pb-2'>
                    <li className='hover:underline'><Link href='/'>Dashbord</Link></li>
                    <li className='hover:underline'><Link href='/menu'>Menu</Link></li>
                    <li className='hover:underline'><Link href='/table'>Table</Link></li>
                    <li className='hover:underline'><Link href='/order'>Order</Link></li>
                    <li className="bg-red-500 px-5 text-white rounded-sm"><Link href='/orderlive'>Orders Live</Link></li>
                </ul>
            </div>

        </>
    )
}
export default Navbar;