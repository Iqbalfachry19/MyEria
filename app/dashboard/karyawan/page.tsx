import Karyawan from './Karyawan';
import Tambah from './tambah/Tambah';

function Page() {
  return (
    <div className="h-screen flex flex-col  justify-center items-center">
      <Karyawan />
      <Tambah />
    </div>
  );
}

export default Page;
