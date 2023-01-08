// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import * as argon2 from 'argon2';
import { prisma } from '../../db/db';
import { Prisma } from '@prisma/client';
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
  res: NextApiResponse<any>,
) {
  const nama = req.body.name;
  const nik = req.body.nik;
  const department = req.body.department;
  const username = req.body.username;
  const password = req.body.password;
  const hp = req.body.hp;
  const alamat = req.body.alamat;
  const hashedPassword = await argon2.hash(password);
  try {
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
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (err.code === 'P2002') {
        res.status(500).json({
          message: 'username atau nik sudah terpakai',
        });
        console.log('username atau nik sudah terpakai');
      }
    }
  }
}
