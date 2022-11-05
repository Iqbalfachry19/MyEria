import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Ubah from './Ubah';
const getData = async (params: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/getKaryawanById/${params}`,
    {
      cache: 'no-store',
    },
  );
  const post = await res.json();
  return post as any;
};
async function Page({ params }: { params: { id: string } }) {
  const post = await getData(params.id);
  console.log(post);
  if (!post) {
    notFound();
  }
  return (
    <Suspense fallback={<p>loading...</p>}>
      <div className="flex">
        <Ubah params={params.id} post={post} />
      </div>
    </Suspense>
  );
}

export default Page;
