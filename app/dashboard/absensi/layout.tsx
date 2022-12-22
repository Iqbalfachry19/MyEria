import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative  z-20">
      <nav className="space-x-2 flex  p-2 text-white absolute w-full bg-gray-600">
        <Link href="/dashboard/absensi">List Absensi Karyawan</Link>
        <Link href="/dashboard/absensi/jam">List Jam Absensi Karyawan</Link>
        <Link href="/dashboard/absensi/jam/tambah">
          Tambah Jam Absensi Karyawan
        </Link>
      </nav>
      <div className="w-full h-full flex flex-col">{children}</div>
    </div>
  );
}
