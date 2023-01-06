// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/db';
import * as argon2 from 'argon2';
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const password = req.body.password;
  const id = req.body.id;
  const hashedPassword = await argon2.hash(password);
  const posts = await prisma.karyawan.update({
    where: {
      id,
    },
    data: {
      password: hashedPassword,
    },
  });

  res.status(200).json(posts);
}
