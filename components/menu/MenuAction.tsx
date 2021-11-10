import { PlusCircleIcon } from "@heroicons/react/outline";

export default function MenuAction() {
    return (
        <div className='fixed rounded-l-md right-0 top-1/4 w-1/12 bottom-auto space-y-2'>
            {
                [1].map(m => (
                    <button key={m} className='flex items-center px-1 py-2 border border-gray-200 rounded-l-md text-red-500 w-full hover:bg-gray-100 hover:border hover:border-red-500'>
                        <PlusCircleIcon className="h-6 w-6 text-red-500" />
                        <span className='ml-2'>Create</span>
                    </button>
                ))
            }
        </div>
    )
}