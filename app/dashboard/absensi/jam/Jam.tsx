type Props = {};
import moment from 'moment';
import Table from './Table';
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getAbsensi`, {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts as any[];
};

const Absensi = async (props: Props) => {
  const posts = await getData();

  return (
    <div className="flex">
      <Table posts={posts} />
    </div>
  );
};

export default Absensi;
