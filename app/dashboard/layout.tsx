import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen z-10 relative ">
      <nav className="space-y-2 flex flex-col p-2    text-white  bg-gray-600">
        <Link href="/dashboard">home</Link>
        <Link href="/dashboard/karyawan">karyawan</Link>
        <Link href="/dashboard/absensi">Absensi</Link>
        <Link href="/dashboard/pengumuman">Pengumuman</Link>
        <LogoutButton />
      </nav>
      <div className="w-full ">{children}</div>
    </div>
  );
}
