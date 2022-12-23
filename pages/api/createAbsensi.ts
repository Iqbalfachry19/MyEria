// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
type Data = {
  nama: string | string[] | undefined;
  nik: string | string[] | undefined;
  jabatan: string | string[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const jamMasuk = req.body.jamMasuk;
  const jamKeluar = req.body.jamKeluar;
  const idKaryawan = req.body.idKaryawan;
  var date = new Date(jamMasuk);
  date.setHours(date.getHours() + 7);
  var date1 = new Date(jamKeluar);
  date1.setHours(date1.getHours() + 7);
  const user = await prisma.absensi.create({
    data: {
      jamMasuk: date,
      jamKeluar: date1,
      idKaryawan,
    },
  });
  res.status(200).json(user);
}
