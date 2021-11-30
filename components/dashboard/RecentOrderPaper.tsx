import FilterPeriodDropdown from "./FilterPeriodDropdown";

export default function FilterPaper() {
    return (
        <section className='w-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold tracking-wider'>Recent Orders</h1>
                <FilterPeriodDropdown />
            </div>
            <div>
                {
                    [1, 2, 3, 4, 5].map((o, i) => (
                        <div key={i} className='flex gap-2 mt-4 px-4 py-4 shadow-sm font-semibold bg-white rounded-lg'>
                            <div className='flex-auto'>
                                <h1 className='text-gray-400'>Order Id</h1>
                                <h1 className='text-red-500'>#94949</h1>
                            </div>
                            <div className='flex-auto'>
                                <h1 className='text-gray-400'>Name</h1>
                                <h1 className='text-red-500'>Kyaw Kyaw</h1>
                            </div>
                            <div className='flex-auto'>
                                <h1 className='text-gray-400'>Order Time</h1>
                                <h1 className='text-red-500'>12/3/2021 3:30 PM</h1>
                            </div>
                            <div className='flex-auto'>
                                <h1 className='text-gray-400'>Type</h1>
                                <h1 className='text-red-500'>Online</h1>
                            </div>
                            <div className='flex-auto'>
                                <h1 className='text-gray-400'>Status</h1>
                                <h1 className='text-red-500'>Received</h1>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    );
}