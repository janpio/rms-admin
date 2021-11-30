import { AccountCircle, NotificationsOutlined, Search } from "@mui/icons-material";

const TopBar = () => {
    return (
        <div className="flex justify-between items-center  py-6 pl-7 pr-8">
            <div className="bg-gray-200 rounded-md">
                <div className="relative">
                    <input type="text" className="w-96 pr-8 pl-5 rounded-md z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
                    <div className="absolute top-2 right-3">
                        <Search />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <NotificationsOutlined />
                <AccountCircle fontSize='large' />
            </div>
        </div>
    )
}
export default TopBar;