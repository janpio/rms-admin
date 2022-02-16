import { MenuItemList } from "components/menu";
import type { NextPage } from "next";

const Menu: NextPage = (props) => {
  return (
    <section className="space-y-2 px-7">
      <MenuItemList isShowing={true} />
    </section>
  );
};

export default Menu;
