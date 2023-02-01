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
    <div className="flex flex-col h-screen pt-20 pb-2 justify-center items-center">
      <div className="overflow-y-scroll flex scrollbar-hide">
        <Absensi posts={posts} />
      </div>
    </div>
  );
}

export default Page;
