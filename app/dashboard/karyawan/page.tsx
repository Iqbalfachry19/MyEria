import Karyawan from './Karyawan';
import Tambah from './tambah/Tambah';
export const dynamic = 'force-dynamic';
function Page() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Karyawan />
      <Tambah />
    </div>
  );
}

export default Page;
