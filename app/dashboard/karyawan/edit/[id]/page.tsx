import Ubah from './Ubah';

async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Ubah params={params.id} post />
    </div>
  );
}

export default Page;
