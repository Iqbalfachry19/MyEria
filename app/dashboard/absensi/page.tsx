import Absensi from './Absensi';
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getIsiAbsensi`, {
    cache: 'no-store',
  });

  return res.json();
};
const getKaryawan = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getKaryawan`, {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts as any[];
};
async function Page() {
  const posts = await getData();
  const karyawan = await getKaryawan();
  return (
    <div className="flex flex-col h-screen pt-20 pb-2 justify-center items-center">
      <div className="overflow-y-auto flex scrollbar-hide">
        <Absensi posts={posts} karyawan={karyawan} />
      </div>
    </div>
  );
}

export default Page;
