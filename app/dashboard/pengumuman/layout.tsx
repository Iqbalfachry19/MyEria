import Link from 'next/link';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative  z-5">
      <nav className="space-x-2 flex  p-2 text-white absolute w-full bg-gray-600">
        <Link href="/dashboard/pengumuman">List Pengumuman</Link>
        <Link href="/dashboard/pengumuman/tambah">Tambah Pengumuman</Link>
      </nav>
      <div className="w-full h-full bg-gray-100 flex flex-col">{children}</div>
    </div>
  );
}

export default Layout;
