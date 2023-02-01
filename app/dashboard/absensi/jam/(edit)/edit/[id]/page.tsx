import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Ubah from './Ubah';
const getData = async (params: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/getAbsensiById/${params}`,
    {
      cache: 'no-store',
    },
  );
  const post = await res.json();
  return post as any;
};
const getDataKaryawan = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getKaryawan`, {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts as any[];
};
async function Page({ params }: { params: { id: string } }) {
  const post = await getData(params.id);
  const karyawan = await getDataKaryawan();
  console.log(post);
  if (!post) {
    notFound();
  }
  return (
    <div className="flex">
      <Ubah params={params.id} post={post} karyawan={karyawan} />
    </div>
  );
}

export default Page;
