import Table from './Table';
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getAbsensi`, {
    cache: 'no-store',
  });
  return res.json();
};
async function Page() {
  const posts = await getData();
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex">
        <Table posts={posts} />
      </div>
    </div>
  );
}

export default Page;
