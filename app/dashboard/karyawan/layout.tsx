import Link from 'next/link';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <nav className="space-x-2 flex  p-2 text-white  bg-gray-600">
        <Link href="/dashboard/karyawan">list Karyawan</Link>
        <Link href="/dashboard/karyawan/tambah">Tambah karyawan</Link>
      </nav>
      <div className="w-full ">{children}</div>
    </div>
  );
}
