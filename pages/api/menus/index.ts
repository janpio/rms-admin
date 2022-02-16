// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const menus = await prisma.menu.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
          categories: true,
        },
      });
      res.status(200).json(menus);
      break;
    case "POST":
      const {
        name,
        price,
        description,
        image,
        tags,
        categoryId,
        is_available,
      } = req.body;
      const _tags = tags.map((id: number) => ({
        tag: {
          connect: {
            id: id,
          },
        },
      }));
      const response = await prisma.menu.create({
        data: {
          name: name,
          price: price,
          description: description,
          menu_image: image,
          is_available: is_available,
          categories: {
            connect: {
              id: categoryId,
            },
          },
          tags: {
            create: _tags,
          },
        },
      });
      res.status(200).json(response);
      break;
    default:
      res.status(404).json("Not Allow Method");
  }
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};
