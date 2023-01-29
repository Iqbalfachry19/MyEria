// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const id = Number(req.query.id);
    const post = await prisma.pengumuman.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
}
