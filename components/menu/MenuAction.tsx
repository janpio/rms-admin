import { PlusCircleIcon } from "@heroicons/react/outline";

type MenuActionProps = {
    onClick: (key: string) => void;
}
export default function MenuAction({ onClick }: MenuActionProps) {
    const menuAction = [
        {
            name: "NEW",
            key: 'new'
        },
        {
            name: "False",
            key: 'false'
        }
    ]
    return (
        <div className='fixed rounded-l-md right-0 top-1/4 w-20 bottom-auto space-y-2 h-2/4 bg-gray-100 py-4'>
            {
                menuAction.map(m => (
                    <button onClick={() => onClick(m.key)} key={m.key} className='flex items-center px-1 py-2 border border-gray-200 rounded-l-md text-red-500 w-full hover:bg-gray-100 hover:border hover:border-red-500'>
                        <PlusCircleIcon className="h-6 w-6 text-red-500" />
                        <span className='ml-1 font-semibold'>{m.name}</span>
                    </button>
                ))
            }
        </div>
    )
}