// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {};
import { prisma } from '../../db/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const posts = await prisma.absensi.findMany({
      orderBy: {
        id: 'asc',
      },
      include: {
        karyawan: true,
      },
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
}
