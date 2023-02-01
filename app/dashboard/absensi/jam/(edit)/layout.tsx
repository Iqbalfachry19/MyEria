import React, { Suspense } from 'react';
import { SpinnerCircular } from 'spinners-react';

import Table from '../Table';
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getAbsensi`, {
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
    <div className="h-screen flex flex-row bg-gray-100  justify-center items-center">
      <Suspense fallback={<SpinnerCircular />}>
        <Table posts={posts} />
      </Suspense>
      <div className="flex bg-white">{children}</div>
    </div>
  );
}
