// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const waktuAbsensiKeluar = req.body.waktuAbsensiKeluar;
  const id = req.body.id;
  const posts = await prisma.isiAbsensi.update({
    where: {
      id,
    },
    data: {
      waktuAbsensiKeluar,
    },
  });

  res.status(200).json(posts);
}
