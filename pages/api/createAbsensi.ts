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
  const jamMasuk = req.body.jamMasuk;
  const jamKeluar = req.body.jamKeluar;
  const tanggal = req.body.tanggal;
  const idKaryawan = req.body.idKaryawan;
  var date2 = new Date(tanggal);
  var date = new Date(jamMasuk);
  date.setHours(date.getHours() + 7);
  var date1 = new Date(jamKeluar);
  date1.setHours(date1.getHours() + 7);
  const user = await prisma.absensi.create({
    data: {
      jamMasuk: date,
      jamKeluar: date1,
      idKaryawan,
      tanggal: date2,
    },
  });
  res.status(200).json(user);
}
