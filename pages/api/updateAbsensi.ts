// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const id = req.body.id;
  const jamMasuk = req.body.jamMasuk;
  const jamKeluar = req.body.jamKeluar;
  const tanggal = req.body.tanggal;
  const posts = await prisma.absensi.update({
    where: {
      id,
    },
    data: {
      jamMasuk,
      jamKeluar,
      tanggal,
    },
  });

  res.status(200).json(posts);
}
