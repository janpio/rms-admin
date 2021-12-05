import { Transition, Dialog } from '@headlessui/react'
import { Close } from '@mui/icons-material';
import SelectBox from 'components/common/SelectBox';
import TagBox from 'components/common/TagBox';
import { Fragment, useState } from 'react'

type CreateMenuProp = {
    isShowing: boolean;
    closeDialogModal: Function;
}
export default function CreateMenu({ isShowing, closeDialogModal }: CreateMenuProp) {
    function closeModal() {
        closeDialogModal();
    }
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
                <form className="mx-auto space-y-4">
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-xl tracking-wider'>Create Menu</h1>
                        <Close fontSize='medium' sx={{ ":hover": { backgroundColor: 'gray', color: 'white', cursor: 'pointer' }, borderRadius: '50%' }} onClick={() => closeDialogModal()} />
                    </div>
                    <section className='grid grid-cols-2 gap-5'>
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                    Category
                                </label>
                                <SelectBox />
                            </div>

                            <div className='flex-grow-0'>
                                <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                                    Tag
                                </label>
                                <TagBox classNames='mt-1' />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>


                            <button
                                type="submit"
                                className="flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Menu Image</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a Photo</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </section>


                </form>
            </Dialog>
        </Transition>

    )
}