import Karyawan from './Karyawan';
import Tambah from './tambah/Tambah';
export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto';
function Page() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Karyawan />
      <Tambah />
    </div>
  );
}

export default Page;
