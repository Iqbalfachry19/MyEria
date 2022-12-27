// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {
  nama: string | string[] | undefined;
  nik: string | string[] | undefined;
  department: string | string[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const jamKeluar = req.body.jamKeluar;
  const idAbsensi = req.body.idAbsensi;

  var date = new Date(jamKeluar);
  date.setHours(date.getHours() + 7);
  const user = await prisma.isiAbsensi.create({
    data: {
      idAbsensi,
      waktuAbsensiKeluar: date,
    },
  });
  res.status(200).json(user);
}
