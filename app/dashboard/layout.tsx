import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { authOptions } from '../../db/auth';
import LogoutButton from './LogoutButton';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex w-full h-screen z-10 relative">
      <nav className="space-y-2 flex flex-col p-2 border-r border-black shadow-2xl text-white bg-gray-600">
        <Link href="/">
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
        <div className="h-10 w-10 relative">
          <Image
            src={
              session?.user?.image
                ? session.user.image
                : `https://avatars.dicebear.com/api/initials/${session?.user?.name}.svg`
            }
            alt=""
            fill
          />
        </div>
        <p>{session?.user?.name}</p>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/karyawan">Karyawan</Link>
        <Link href="/dashboard/absensi">Absensi</Link>
        <Link href="/dashboard/pengumuman">Pengumuman</Link>
        <Link href="/generate">Generate QR</Link>
        <LogoutButton />
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
}
