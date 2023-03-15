import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100">
      {' '}
      <nav className="space-x-2 flex  p-2 text-white absolute w-full items-center justify-between bg-gray-600">
        <Link href="/">
          <ArrowLeftIcon className="w-4 h-4" /> Kembali
        </Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      {children}
    </div>
  );
}
