import SelectBox from "components/common/SelectBox";
import TagBox from "components/common/TagBox";
type FilterMenuProp = {
  onClickCreate?: () => void;
};
export default function FilterMenu({ onClickCreate }: FilterMenuProp) {
  return (
    <div className="flex gap-3 items-center py-2">
      <TagBox />
      <SelectBox classNames="w-32" />
      <button
        onClick={onClickCreate}
        className="border p-1 flex items-center shadow-sm rounded-md hover:border-red-500"
      >
        <span className="ml-1 text-red-500 font-medium px-3">Create</span>
      </button>
    </div>
  );
}
