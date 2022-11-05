import Karyawan from './Karyawan';
import Tambah from './tambah/Tambah';

function Page() {
  return (
    <>
      {/* @ts-ignore */}
      <Karyawan />
      <Tambah />
    </>
  );
}

export default Page;
