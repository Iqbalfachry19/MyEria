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
  const idAbsensi = req.body.idAbsensi;
  const pukul = req.body.pukul;
  const lokasi = req.body.lokasi;
  const tanggal = req.body.tanggal;
  const status = req.body.status;
  const user = await prisma.isiAbsensi.create({
    data: {
      absensi: {
        connect: {
          id: Number(idAbsensi),
        },
      },
      pukul,
      lokasi,
      tanggal,
      status,
    },
  });
  res.status(200).json(user);
}
