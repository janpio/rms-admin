import { Dialog, Transition } from "@headlessui/react";
import { Close } from "@mui/icons-material";
import SelectBox from "components/common/SelectBox";
import TagBox from "components/common/TagBox";
import { baseURL } from "config";
import Category from "models/Category";
import Tag from "models/Tag";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { toBase64 } from "utli";

type CreateMenuProp = {
  isShowing: boolean;
  closeDialogModal: Function;
};
export default function CreateMenu({
  isShowing,
  closeDialogModal,
}: CreateMenuProp) {
  const [imageFile, setImageFile] = useState<File>();
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedTags, setSelectedTags] = useState<Tag[]>();
  const [isSaveLoading, setIsSaveLoading] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  function closeModal() {
    closeDialogModal();
  }

  const createMenu = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const image = await toBase64(imageFile!);
    setIsSaveLoading(true);
    const data = {
      name: nameRef.current?.value!,
      price: priceRef.current?.value!,
      category: selectedCategory,
      tags: selectedTags!,
      description: descRef.current?.value!,
      image: image,
    };
    await fetch(baseURL + "/api/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        setIsSaveLoading(false);
        setImageFile(undefined);
        closeDialogModal();
      })
      .catch((err) => {
        setIsSaveLoading(false);
      });
  };
  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 mx-28 my-20 overflow-y-auto bg-white rounded-lg shadow-lg px-10 py-8 border"
        onClose={closeModal}
      >
        <form className="mx-auto space-y-4" onSubmit={createMenu}>
          <div className="flex justify-between">
            <h1 className="font-bold text-xl tracking-wider">Create Menu</h1>
            <Close
              fontSize="medium"
              sx={{
                ":hover": {
                  backgroundColor: "gray",
                  color: "white",
                  cursor: "pointer",
                },
                borderRadius: "50%",
              }}
              onClick={() => closeDialogModal()}
            />
          </div>
          <section className="grid grid-cols-2 gap-5">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  ref={priceRef}
                  type="number"
                  name="price"
                  id="price"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <SelectBox
                  classNames="mt-1"
                  onSelect={(category) => setSelectedCategory(category)}
                />
              </div>

              <div className="flex-grow-0">
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tag
                </label>
                <TagBox
                  onChange={(tags) => setSelectedTags(tags)}
                  classNames="mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  ref={descRef}
                  name="description"
                  id="description"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSaveLoading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Save
              </button>
            </div>
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Menu Image
                </label>
                <div className="flex mt-1 cursor-pointer items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Select a photo
                      </p>
                    </div>
                    <input
                      ref={imageRef}
                      onChange={(e) => setImageFile(e.target.files![0])}
                      id="menu_image"
                      name="menu_image"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              {imageFile && (
                <div className="rounded-md relative w-full h-4/6 overflow-hidden">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={URL.createObjectURL(imageFile)}
                    alt="menu image"
                  />
                </div>
              )}
            </div>
          </section>
        </form>
      </Dialog>
    </Transition>
  );
}
