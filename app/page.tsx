import Link from 'next/link';
import { unstable_getServerSession } from 'next-auth';
import LogoutButton from './dashboard/LogoutButton';
import Providers from './Providers';
export default async function Home() {
  const session = await unstable_getServerSession();
  return (
    <Providers session={session}>
      <div className="flex justify-center items-center flex-col mx-auto h-screen">
        <main className="">
          <h1 className="text-6xl">Welcome to My Eria</h1>

          <div className="border-2 w-80 mx-auto mt-10 hover:text-blue-400 hover:border-blue-400 py-4 transition-all duration-200 ease-out rounded-lg px-4">
            <Link href="/generate" className="text-2xl space-y-2">
              <h2>Generate a qr code&rarr;</h2>
              <p>buat qr code</p>
            </Link>
          </div>

          <div className="border-2 w-80 mx-auto mt-10 hover:text-blue-400 hover:border-blue-400 py-4 transition-all duration-200 ease-out rounded-lg px-4">
            <Link href="/dashboard" className="text-2xl space-y-2">
              <h2>Go To Dashboard&rarr;</h2>
              <p>Pergi ke dashboard sebagai admin</p>
            </Link>
          </div>
          <div className="flex mt-10  w-80 items-center justify-center mx-auto">
            <LogoutButton />
          </div>
        </main>
      </div>
    </Providers>
  );
}
