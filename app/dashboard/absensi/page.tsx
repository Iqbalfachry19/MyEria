import Absensi from './Absensi';
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getIsiAbsensi`, {
    cache: 'no-store',
  });

  return res.json();
};
async function Page() {
  const posts = await getData();
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Absensi posts={posts} />
    </div>
  );
}

export default Page;
