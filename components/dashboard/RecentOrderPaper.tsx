export default function FilterPaper() {
    return (
        <div className='p-3 border w-1/3 rounded-md'>
            <div className='flex justify-between items-center'>
                <h1 className="text-lg tranfo">Recent Orders Requested</h1>
                <button className='bg-red-500 text-white px-3 py-1 rounded-md'>View All</button>
            </div>
            <hr className='my-3' />
            <table className='table-fixed w-full mt-3 border-collapse'>
                <thead>
                    <tr>
                        <th className='border-b p-1' align='left'>Food Item</th>
                        <th className='border-b p-1' align='left'>Price</th>
                        <th className='border-b p-1' align='left'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-b p-1'>Mango Rice</td>
                        <td className='border-b p-1'>1000</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr className="bg-emerald-200">
                        <td className='border-b p-1'>Banana</td>
                        <td className='border-b p-1'>192</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr>
                        <td className='border-b p-1'>Piza</td>
                        <td className='border-b p-1'>222</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr>
                        <td className='border-b p-1'>Mango Rice</td>
                        <td className='border-b p-1'>1000</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr className="bg-emerald-200">
                        <td className='border-b p-1'>Banana</td>
                        <td className='border-b p-1'>192</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr>
                        <td className='border-b p-1'>Piza</td>
                        <td className='border-b p-1'>222</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr>
                        <td className='border-b p-1'>Mango Rice</td>
                        <td className='border-b p-1'>1000</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr className="bg-emerald-200">
                        <td className='border-b p-1'>Banana</td>
                        <td className='border-b p-1'>192</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr>
                        <td className='border-b p-1'>Piza</td>
                        <td className='border-b p-1'>222</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr>
                        <td className='border-b p-1'>Mango Rice</td>
                        <td className='border-b p-1'>1000</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr className="bg-emerald-200">
                        <td className='border-b p-1'>Banana</td>
                        <td className='border-b p-1'>192</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                    <tr>
                        <td className='border-b p-1'>Piza</td>
                        <td className='border-b p-1'>222</td>
                        <td className='border-b p-1'>Detail</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}