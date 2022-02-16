// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const orders = await prisma.order.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        include: {
          transactions: true,
        },
      });
      res.status(200).json(orders);
      break;
    case "POST":
      const { orderBy, menuIds }: { orderBy: number; menuIds: number[] } =
        req.body;
      const _menus = menuIds.map((id: number) => ({
        menu: {
          connect: {
            id: id,
          },
        },
      }));
      const response = await prisma.order.create({
        data: {
          user: {
            connect: {
              id: orderBy,
            },
          },
          transactions: {
            create: _menus,
          },
        },
      });
      res.status(200).json(response);
      break;
  }
}
