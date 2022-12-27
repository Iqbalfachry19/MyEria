// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import * as argon2 from 'argon2';
import { prisma } from '../../db/db';
type Data = {
  nama: string | string[] | undefined;
  nik: string | string[] | undefined;
  department: string | string[] | undefined;
  username: string | string[] | undefined;
  password: string | string[] | undefined;
  hp: string | string[] | undefined;
  alamat: string | string[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const nama = req.body.name;
  const nik = req.body.nik;
  const department = req.body.department;
  const username = req.body.username;
  const password = req.body.password;
  const hp = req.body.hp;
  const alamat = req.body.alamat;
  const hashedPassword = await argon2.hash(password);

  const user = await prisma.karyawan.create({
    data: {
      nama,
      nik,
      username,
      password: hashedPassword,
      hp,
      alamat,
      department,
    },
  });
  res.status(200).json(user);
}
