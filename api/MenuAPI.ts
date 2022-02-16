import { baseURL } from "config";

export default class MenuAPI {
  deleteMenu = async (id: number) => {
    return await fetch(`/api/menus/${id}`, { method: "delete" });
  };

  createMenu = async (data = {}) => {
    const response = await fetch(`/api/menus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json();
  };
}
