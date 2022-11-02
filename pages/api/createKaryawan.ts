// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  nama: string | string[] | undefined;
  nik: string | string[] | undefined;
  jabatan: string | string[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const nama = req.body.name;
  const nik = req.body.nik;
  const jabatan = req.body.jabatan;
  const prisma = new PrismaClient();
  const user = await prisma.karyawan.create({
    data: {
      nama,
      nik,
      jabatan,
    },
  });
  res.status(200).json(user);
}
