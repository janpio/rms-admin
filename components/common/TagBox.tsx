import { useTag } from "hooks";
import Tag from "models/Tag";
import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
type TagBoxProps = {
  classNames?: string;
  onChange?: (tags: Tag[]) => void;
};
export default function TagBox({ classNames, onChange }: TagBoxProps) {
  const animatedComponents = makeAnimated();
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "red" : "blue",
      backgroundColor: "white",
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      fontSize: 14,
      color: "red",
      "input:focus": {
        boxShadow: "none",
      },
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      fontSize: 14,
      color: "black",
    }),
    multiValueLabel: (provided: any, state: any) => ({
      ...provided,
      color: "blue",
      fontWeight: "bold",
      borderRadius: 5,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: 8,
    }),
  };

  const { tags, isLoading, isError } = useTag();

  const _tagOptions = tags?.map((t) => ({ label: t.name, value: t.id }));

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

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
  );
}
