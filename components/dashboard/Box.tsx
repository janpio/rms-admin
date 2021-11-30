import { CurrencyDollarIcon, CakeIcon, LocationMarkerIcon, TableIcon } from '@heroicons/react/solid'


const Box = () => {
    const boxList = [
        {
            prefix: '$',
            name: "Total Sales",
            count: Math.floor(Math.random() * (100000 - 1000) + 1000),
            surfix: 'k',
            percentage: Math.floor(Math.random() * (100 - 0) + 0)
        },
        {
            name: "New Orders",
            count: Math.floor(Math.random() * (100000 - 1000) + 1000),
            percentage: Math.floor(Math.random() * (100 - 0) + 0)
        },
        {
            name: "Visitors",
            count: Math.floor(Math.random() * (100000 - 1000) + 1000),
            percentage: Math.floor(Math.random() * (100 - 0) + 0)
        },
        {
            name: "Customers",
            count: Math.floor(Math.random() * (100000 - 1000) + 1000),
            percentage: Math.floor(Math.random() * (100 - 0) + 0)
        },
    ];
    return (
        <div className='flex gap-12'>
            {
                boxList.map((b, i) => (
                    <div key={i} className='flex-auto bg-white space-y-3 border px-8 py-9 min-w-min rounded-3xl shadow-sm w-48'>
                        <h3 className='text-center text-sm uppercase font-black text-red-400'>{b.name}</h3>
                        <h2 className='text-center text-3xl font-black text-gray-800'>{b.prefix}{b.count}{b.surfix}</h2>
                        <div className='flex gap-2'>
                            <div className="self-center flex-grow w-full bg-gray-200 rounded-lg">
                                <div className="bg-red-500 text-xs leading-none rounded-l-lg text-center py-1 text-white" style={{ width: b.percentage }}></div>
                            </div>
                            <p className='text-xs font-bold text-red-400'>{b.percentage}%</p>
                        </div>

                    </div>
                )
                )
            }
        </div>
    )
}
export default Box;