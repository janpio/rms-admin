import { baseURL } from "config";
import Tag from "models/Tag";
import React from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import useSWR from "swr";
import { fetcher } from "utli";
interface SelectItem {
    value: string;
    label: string;
}
type TagBoxProps = {
    tagOptions?: SelectItem[] | undefined;
    classNames?: string;
    onChange?: (tags: Tag[] | unknown) => void
}
export default function TagBox({ tagOptions, classNames, onChange }: TagBoxProps) {
    const animatedComponents = makeAnimated();
    const customStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isSelected ? 'red' : 'blue',
            backgroundColor: 'white',
        }),
        input: (provided: any, state: any) => ({
            ...provided,
            'input:focus': {
                boxShadow: 'none',
            }
        }),
        multiValueLabel: (provided: any, state: any) => ({
            ...provided,
            color: 'blue',
            fontWeight: 'bold',
            borderRadius: 5
        }),
        valueContainer: (provided: any, state: any) => ({
            ...provided,
            borderRadius: 5
        }),
    }


    const { data: tags, error } = useSWR<Tag[]>(baseURL + '/api/tags', fetcher);

    const _tagOptions = tags?.map(t => (
        { label: t.name, value: t.id }
    ));
    return (
        <Select
            className={classNames}
            styles={customStyles}
            isSearchable
            closeMenuOnSelect={false}
            isMulti
            onChange={(tags) => onChange && onChange(tags)}
            components={animatedComponents}
            options={_tagOptions}
        />
    )
}