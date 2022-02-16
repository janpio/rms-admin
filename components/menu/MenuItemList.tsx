import { Transition } from "@headlessui/react";
import { Delete, Edit } from "@mui/icons-material";
import MenuAPI from "api/MenuAPI";
import { baseURL } from "config";
import Menu from "models/Menu";
import Image from "next/image";
import React, { useState } from "react";
import useSWR, { mutate, trigger } from "swr";
import { fetcher } from "utli";
import CreateMenu from "./CreateMenu";
import FilterMenu from "./FilterMenu";
type MenuItemListProp = {
  isShowing: boolean;
};
const MenuItemList: React.FC<MenuItemListProp> = ({ isShowing }) => {
  const menuAPI = new MenuAPI();
  const [visibleCreateMenu, setVisibleCreateMenu] = useState(false);
  const { data: menus, error } = useSWR<Menu[]>(
    baseURL + "/api/menus",
    fetcher
  );

  const refreshMenuList = () => {
    mutate(baseURL + "/api/menus");
  };
  return (
    <Transition
      appear={true}
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Transition.Child>
        <FilterMenu onClickCreate={() => setVisibleCreateMenu(true)} />
      </Transition.Child>
      <Transition.Child>
        <CreateMenu
          triggerRefreshMenuList={() => refreshMenuList()}
          isShowing={visibleCreateMenu}
          closeDialogModal={() => setVisibleCreateMenu(false)}
        />
      </Transition.Child>
      <Transition.Child>
        <table
          style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}
          className="table-fixed w-full"
        >
          <tbody>
            {menus &&
              menus?.map((menu) => (
                <tr
                  className="shadow-sm font-semibold bg-white rounded-lg"
                  key={menu.id}
                >
                  <td className="relative rounded-l-md overflow-hidden bg-red-400">
                    {menu?.menu_image && (
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src={menu?.menu_image}
                        alt="menu image"
                      />
                    )}
                  </td>
                  <td className="px-3 py-4">
                    <div>
                      <h1 className="text-gray-400">အမည်</h1>
                      <h1 className="text-red-500 mt-1 truncate text-sm lg:text-base">
                        {menu.name}
                      </h1>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div>
                      <h1 className="text-gray-400 text-sm lg:text-base">
                        ဈေးနှုန်း
                      </h1>
                      <h1 className="text-red-500 mt-1 text-sm lg:text-base">
                        {menu.price} ကျပ်
                      </h1>
                    </div>
                  </td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <div>
                      <h1 className="text-gray-400">အမျိုးအစား</h1>
                      <h1 className="text-red-500 mt-1 capitalize">
                        {menu.categories.name}
                      </h1>
                    </div>
                  </td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <div>
                      <h1 className="text-gray-400">ဖော်ပြချက်</h1>
                      <h1 className="text-red-500 mt-1 truncate">
                        {menu.description}
                      </h1>
                    </div>
                  </td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <div>
                      <h1 className="text-gray-400">သတ်မှတ်ချက်</h1>
                      <h1 className="text-red-500 mt-1">{menu.rating}</h1>
                    </div>
                  </td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <div>
                      <h1 className="text-gray-400 ">စုစုပေါင်းကြည့်ရှုမှု</h1>
                      <h1 className="text-red-500 mt-1">{menu.view_count}</h1>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div>
                      <h1 className="text-gray-400 text-sm lg:text-base">
                        အခြေအနေ
                      </h1>
                      <h1 className="text-red-500 mt-1 text-sm lg:text-base">
                        {menu.is_available ? "ရနိုင်သည်" : "မရနိုင်ပါ"}
                      </h1>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <div className="flex-1">
                      <h1 className="text-gray-400 text-sm lg:text-base">
                        လုပ်ဆောင်ချက်
                      </h1>
                      <h1 className="text-red-500 mt-1 ">
                        <Edit
                          onClick={() => alert("Edit")}
                          className="mr-3"
                          fontSize="small"
                        />{" "}
                        <Delete
                          className="cursor-pointer"
                          onClick={() => {
                            menuAPI
                              .deleteMenu(menu?.id!)
                              .then(() => refreshMenuList());
                          }}
                          fontSize="small"
                        />
                      </h1>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Transition.Child>
    </Transition>
  );
};

export default MenuItemList;
