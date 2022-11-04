// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const prisma = new PrismaClient();
  const id = Number(req.query.id);
  const post = await prisma.karyawan.findUnique({
    where: {
      id,
    },
  });

  res.status(200).json(post);
}
