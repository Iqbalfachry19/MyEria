// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const id = req.body.id;
  const pukul = req.body.pukul;
  const lokasi = req.body.lokasi;
  const tanggal = req.body.tanggal;
  const status = req.body.status;
  const keterangan = req.body.keterangan;
  const posts = await prisma.isiAbsensi.update({
    where: {
      id,
    },
    data: {
      pukul,
      lokasi,
      tanggal,
      status,
      keterangan,
    },
  });

  res.status(200).json(posts);
}
