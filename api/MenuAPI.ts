import { baseURL } from "config";

export default class MenuAPI {
  deleteMenu = async (id: number) => {
    return await fetch(`${baseURL}/api/menus/${id}`, { method: "delete" });
  };
}
