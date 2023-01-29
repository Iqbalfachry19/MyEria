import Link from 'next/link';

import Button from './Button';
import Table from './Table';
type Props = {};

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getKaryawan`, {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts as any[];
};
const Karyawan = async (props: Props) => {
  const posts = await getData();

  return (
    <div className="flex flex-col justify-center bg-white rounded-lg p-4 mx-auto items-center  w-10/11">
      <Table posts={posts} />
    </div>
  );
};

export default Karyawan;
