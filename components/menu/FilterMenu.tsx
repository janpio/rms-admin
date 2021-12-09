import { DotsHorizontalIcon } from '@heroicons/react/solid'
import TagBox from 'components/common/TagBox';
type FilterMenuProp = {
    onClickCreate?: () => void
}
export default function FilterMenu({ onClickCreate }: FilterMenuProp) {


    return (
        <div className='flex gap-3 items-center'>
            {
                <TagBox />
            }

            <button onClick={onClickCreate} className='border p-1 flex items-center shadow-sm rounded-md hover:border-red-500'>
                <span className='ml-1 text-red-500 font-medium'>Create</span>
            </button>
        </div>
    )
}