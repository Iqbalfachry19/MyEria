import Ubah from './Ubah';
const getData = async (params: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/getKaryawanById/${params}`,
  );
  const post = await res.json();
  return post as any;
};
async function Page({ params }: { params: { id: string } }) {
  const post = await getData(params.id);
  console.log(post);
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Ubah params={params.id} post />
    </div>
  );
}

export default Page;
