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
  const title = req.body.title;
  const body = req.body.body;

  const user = await prisma.pengumuman.create({
    data: {
      title,
      body,
    },
  });
  res.status(200).json(user);
}
