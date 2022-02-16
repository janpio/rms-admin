import { MenuItemList, MenuAction } from "components/menu";
import type { NextPage } from "next";
import { useState } from "react";

const Menu: NextPage = (props) => {
  return (
    <section className="space-y-2 px-7">
      <MenuItemList isShowing={true} />
    </section>
  );
};

export default Menu;
