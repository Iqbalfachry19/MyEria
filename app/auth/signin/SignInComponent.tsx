'use client';
import { getProviders, signIn } from 'next-auth/react';
import { useState } from 'react';
type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};
function SignInComponent({ providers }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex flex-col items-center space-y-2 justify-center">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        className="px-4 py-2 rounded-lg border border-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="px-4 py-2 rounded-lg border border-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              signIn(provider.id, {
                username,
                password,
                callbackUrl: process.env.VERCEL_URL || 'http://localhost:3000',
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignInComponent;
