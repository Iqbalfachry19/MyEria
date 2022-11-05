import Link from 'next/link';
import React, { Suspense } from 'react';
import Karyawan from './Karyawan';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col  justify-center items-center">
      <Suspense fallback={<p>loading...</p>}>
        {/* @ts-ignore */}
        <Karyawan />
      </Suspense>
      <div>{children}</div>
    </div>
  );
}
