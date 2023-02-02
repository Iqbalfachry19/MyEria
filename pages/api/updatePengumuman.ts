// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const title = req.body.title;
  const body = req.body.body;

  const id = req.body.id;

  const posts = await prisma.pengumuman.update({
    where: {
      id,
    },
    data: {
      title,
      body,
    },
  });

  res.status(200).json(posts);
}
