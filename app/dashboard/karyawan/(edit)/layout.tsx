import Link from 'next/link';
import React from 'react';
import Karyawan from './Karyawan';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col  justify-center items-center">
      {/* @ts-ignore */}
      <Karyawan />
      <div>{children}</div>
    </div>
  );
}