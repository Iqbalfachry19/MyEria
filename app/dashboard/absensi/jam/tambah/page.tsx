import Tambah from './Tambah';
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getKaryawan`, {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts as any[];
};
async function Page() {
  const posts = await getData();

  return (
    <div className="flex flex-col  h-screen justify-center items-center">
      <Tambah posts={posts} />
    </div>
  );
}

export default Page;
