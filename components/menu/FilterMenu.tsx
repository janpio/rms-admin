import { DotsHorizontalIcon } from '@heroicons/react/solid'
import { baseURL } from 'config';
import { Suspense } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import useSWR from 'swr';
import Tag from 'models/Tag';
export default function FilterMenu() {
    const animatedComponents = makeAnimated();

    const fetcher = (url: string) => fetch(url).then(r => r.json())

    const { data: tags, error } = useSWR<Tag[]>(baseURL + '/api/tags', fetcher);

    const tagsOption = tags?.map(t => (
        { label: t.name, value: t.name }
    ));

    const customStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            backgroundColor: 'white'
        }),
        input: (provided: any, state: any) => ({
            ...provided,
            'input:focus': {
                boxShadow: 'none',
            }
        }),
        multiValueLabel: (provided: any, state: any) => ({
            ...provided,
            color: 'red',
            fontWeight: 'bold'

        }),
        container: (provided: any, state: any) => ({
            ...provided,
            width: '30%'

        }),
    }

    return (
        <div className='flex gap-3 items-center'>
            {
                !tags ? <div>Loading...</div> :
                    <Select
                        className="outline-none"
                        styles={customStyles}
                        isSearchable
                        closeMenuOnSelect={false}
                        isMulti
                        components={animatedComponents}
                        options={tagsOption}
                    />
            }

            <button className='border p-1 flex items-center shadow-sm rounded-md hover:border-red-500'>
                <DotsHorizontalIcon className="h-5 w-5 text-red-500" />
                <span className='ml-1 text-red-500'>More</span>
            </button>
        </div>
    )
}