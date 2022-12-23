import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col mx-auto h-screen">
      <main className="">
        <h1 className="text-6xl">Welcome to My Eria</h1>

        <div className="border-2 w-80 mx-auto mt-10 hover:text-blue-400 hover:border-blue-400 py-4 transition-all duration-200 ease-out rounded-lg px-4">
          <Link href="/generate" className="text-2xl space-y-2">
            <h2> Generate a qr code&rarr;</h2>
            <p> Generate a qr code with text or a link</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
