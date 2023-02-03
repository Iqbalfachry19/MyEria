import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import LogoutButton from './LogoutButton';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex w-full h-screen z-10 relative ">
      <nav className="space-y-2 flex flex-col p-2 	 border-r border-black shadow-2xl    text-white  bg-gray-600">
        <div className="h-10 w-10 relative">
          <Image
            src={`${
              session?.user?.image
                ? session.user.image
                : `https://avatars.dicebear.com/api/initials/${session?.user?.name}.svg`
            }`}
            alt=""
            fill
          />
        </div>
        <p>{session?.user?.name}</p>
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
