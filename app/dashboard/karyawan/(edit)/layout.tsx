import React, { Suspense } from 'react';
import { SpinnerCircular } from 'spinners-react';
import Karyawan from './Karyawan';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-row bg-gray-100  justify-center items-center">
      <Suspense fallback={<SpinnerCircular />}>
        {/* @ts-ignore */}
        <Karyawan />
      </Suspense>
      <div className="flex bg-white">{children}</div>
    </div>
  );
}
