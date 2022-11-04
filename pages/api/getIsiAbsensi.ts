// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const prisma = new PrismaClient();
    const posts = await prisma.isiAbsensi.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
}
