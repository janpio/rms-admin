import Category from "./Category";
import TagOnMenu from "./TagOnMenu";

export default interface Menu {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  menu_image?: string;
  categoryId?: number;
  rating?: number;
  is_available?: boolean;
  view_count?: number;
  creater_id?: number;
  slug?: string;
  categories: Category;
  tags?: TagOnMenu[];
}
