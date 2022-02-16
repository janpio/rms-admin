// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = parseInt(req.query.id as string);
  let response = null;
  switch (req.method) {
    case "DELETE":
      response = await prisma.order.delete({ where: { id: id } });
      res.status(200).json(response);
      break;
    case "GET":
      response = await prisma.order.findFirst({ where: { id: id } });
      res.status(200).json(response);
      break;
  }
}
