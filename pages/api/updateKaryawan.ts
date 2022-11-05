// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const nama = req.body.name;
  const nik = req.body.nik;
  const jabatan = req.body.jabatan;
  const id = req.body.id;

  const posts = await prisma.karyawan.update({
    where: {
      id,
    },
    data: {
      nama,
      nik,
      jabatan,
    },
  });

  res.status(200).json(posts);
}
