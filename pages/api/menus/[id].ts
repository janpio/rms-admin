// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE":
      const id = parseInt(req.query.id as string);
      // res.json(id);
      // res.end();
      const deletedMenu = await prisma.menu.delete({ where: { id: id } });
      res.status(200).json(deletedMenu);
      break;
  }
}
