import Link from 'next/link';

import Button from './Button';
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
      <div>
        <h1>List Karyawan</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>NIK</th>
              <th>Jabatan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{post.nama}</td>
                <td>{post.nik}</td>
                <td>{post.jabatan}</td>
                <td className="space-x-2">
                  <Link href={`/dashboard/karyawan/edit/${post.id}`}>edit</Link>
                  <Button id={post.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Karyawan;
