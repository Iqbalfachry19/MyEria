import Ubah from './Ubah';

function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Ubah params={params.id} />
    </div>
  );
}

export default Page;
