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
    <div className="flex flex-col justify-center items-center  w-full">
      <Table posts={posts} />
    </div>
  );
};

export default Karyawan;
