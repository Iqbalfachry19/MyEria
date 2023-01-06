// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const nama = req.body.name;

  const department = req.body.department;
  const id = req.body.id;
  const hp = req.body.hp;
  const alamat = req.body.alamat;

  const posts = await prisma.karyawan.update({
    where: {
      id,
    },
    data: {
      nama,
      nik,
      department,
      hp,
      alamat,
      username,
    },
  });

  res.status(200).json(posts);
}
