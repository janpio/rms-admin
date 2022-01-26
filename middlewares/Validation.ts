import Category from "models/Category";
import Menu from "models/Menu";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";

export const MenuSchema: yup.SchemaOf<Menu> = yup.object({
  id: yup.number(),
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  menu_image: yup.string().required(),
  categoryId: yup.number().required(),
  rating: yup.number().required(),
  view_count: yup.number(),
  is_available: yup.boolean().required(),
  slug: yup.string(),
  categories: yup.object(),
  creater_id: yup.number(),
  tags: yup.array(),
});

export const validateMenu = (
  schema: yup.SchemaOf<Menu>,
  handler: NextApiHandler
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (["POST"].includes(req.method ?? "")) {
      try {
        await schema.validate(req.body);
      } catch (err) {
        return res.json(err);
      }
    }
    await handler(req, res);
  };
};
