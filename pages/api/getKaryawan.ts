// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const posts = await prisma.karyawan.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
}
