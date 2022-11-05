import Link from 'next/link';
import React from 'react';
import Karyawan from './Karyawan';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative  z-20">
      <nav className="space-x-2 flex  p-2 text-white absolute w-full bg-gray-600">
        <Link href="/dashboard/karyawan">list Karyawan</Link>
        <Link href="/dashboard/karyawan/tambah">Tambah karyawan</Link>
      </nav>
      <div className="h-screen flex flex-col  justify-center items-center">
        {/* @ts-ignore */}
        <Karyawan />
        {children}
      </div>
    </div>
  );
}
