// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Tag from "models/Tag";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const menus = await prisma.menu.findMany({
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
      const { name, price, description, image, tags, category } = req.body;
      const _tags = tags.map((t: { value: number }) => ({
        tag: {
          connect: {
            id: t.value,
          },
        },
      }));
      const response = await prisma.menu.create({
        data: {
          name: name,
          price: price,
          description: description,
          menu_image: image,
          categories: {
            connect: {
              id: category.id,
            },
          },
          tags: {
            create: _tags,
          },
        },
      });
      res.status(200).json(response);
      break;
  }
}
