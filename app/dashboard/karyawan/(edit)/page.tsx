import Karyawan from './Karyawan';
import Tambah from '../(tambah)/tambah/Tambah';
import { Suspense } from 'react';

function Page() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Tambah />;
    </Suspense>
  );
}

export default Page;
