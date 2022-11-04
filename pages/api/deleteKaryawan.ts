// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const id = req.body.id;
  const prisma = new PrismaClient();
  const posts = await prisma.karyawan.delete({
    where: {
      id,
    },
  });

  res.status(200).json(posts);
}
