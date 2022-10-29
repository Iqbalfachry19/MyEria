// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string | string[] | undefined;
  name: string | string[] | undefined;
  location: string | string[] | undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.query.name);
  const id = req.query.id;
  const location = req.query.location;
  const name = req.query.name;
  res.status(200).json({ id, name, location });
}
