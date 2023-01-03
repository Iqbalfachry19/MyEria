// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../db/db';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const posts = await prisma.isiAbsensi.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        absensi: {
          include: {
            karyawan: true,
          },
        },
      },
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
}
