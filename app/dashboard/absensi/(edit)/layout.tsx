import React, { Suspense } from 'react';
import { SpinnerCircular } from 'spinners-react';
import Absensi from '../Absensi';

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getIsiAbsensi`, {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts as any[];
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getData();
  return (
    <div className="flex flex-row overflow-y-scroll h-screen justify-center items-center">
      <div className="flex h-5/6  ">
        <Suspense fallback={<SpinnerCircular />}>
          <Absensi posts={posts} />
        </Suspense>
      </div>
      <div className="flex ml-2 bg-white">{children}</div>
    </div>
  );
}
