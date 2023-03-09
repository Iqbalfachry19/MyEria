import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../db/auth';

async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col h-screen justify-center bg-gray-100 items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyEria Dashboard!</h1>
      <div className="bg-white rounded-md shadow-md p-8">
        <p className="text-xl mb-4">Hi, {session?.user?.name}!</p>
        <p className="text-gray-500">
          You are now logged in and ready to use MyEria.
        </p>
      </div>
    </div>
  );
}

export default Page;
