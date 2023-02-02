import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>hi {session?.user?.name} Selamat Datang di dashboard MyEria</div>
    </div>
  );
}

export default Page;
