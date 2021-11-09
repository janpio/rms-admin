import { CurrencyDollarIcon, CakeIcon, LocationMarkerIcon, TableIcon } from '@heroicons/react/solid'


const Box = () => {
    const boxList = [
        {
            name: "Total Sales",
            count: 200,
            surfix: 'kyat(s)',
            icon: <CurrencyDollarIcon className="h-5 w-5 text-red-500 ml-5" />
        },
        {
            name: "Total Orders",
            count: 200,
            icon: <LocationMarkerIcon className="h-5 w-5 text-red-500 ml-5" />
        },
        {
            name: "Total Menus",
            count: 100,
            icon: <CakeIcon className="h-5 w-5 text-red-500 ml-5" />
        },
        {
            name: "Total Tables",
            count: 20,
            icon: <TableIcon className="h-5 w-5 text-red-500 ml-5" />
        },
    ];
    return (
        <div className='flex gap-5'>
            {
                boxList.map((b, i) => (
                    <div key={i} className='flex-auto border pt-4 pb-9 px-3 min-w-min rounded-md'>
                        <div className='flex justify-between'>
                            <h3>{b.name}</h3>
                            {b.icon}
                        </div>
                        <h2>{b.surfix ? b.count + ' ' + b.surfix : b.count}</h2>
                    </div>
                )
                )
            }
        </div>
    )
}
export default Box;