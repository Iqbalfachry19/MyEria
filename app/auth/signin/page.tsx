import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import SignInComponent from './SignInComponent';
async function SignInPage() {
  const providers = await getProviders();
  return (
    <div className="grid justify-center mt-36 items-center">
      <div>
        <Image
          className="rounded-full mx-10 object-cover"
          width={200}
          height={200}
          src="/logo.png"
          alt="Profile Picture"
        />
      </div>
      <h1 className="flex text-2xl text-center pb-2">
        Selamat datang di myeria
      </h1>
      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
