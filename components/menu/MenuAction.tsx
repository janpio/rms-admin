import { PlusCircleIcon } from "@heroicons/react/outline";

type MenuActionProps = {
    onClick: (key: string) => void;
}
export default function MenuAction({ onClick }: MenuActionProps) {
    const menuAction = [
        {
            name: "Create",
            key: 'create'
        }
    ]
    return (
        <div className='fixed rounded-l-md right-0 top-1/4 w-1/12 bottom-auto space-y-2'>
            {
                menuAction.map(m => (
                    <button onClick={() => onClick(m.key)} key={m.key} className='flex items-center px-1 py-2 border border-gray-200 rounded-l-md text-red-500 w-full hover:bg-gray-100 hover:border hover:border-red-500'>
                        <PlusCircleIcon className="h-6 w-6 text-red-500" />
                        <span className='ml-2'>{m.name}</span>
                    </button>
                ))
            }
        </div>
    )
}