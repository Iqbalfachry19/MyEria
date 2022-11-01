import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
type Props = {};
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}
const getData = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.karyawan.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  console.log(posts);
  return posts;
};
const Karyawan = asyncComponent(async (props: Props) => {
  const posts = await getData();

  return (
    <div className="flex">
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
                <td>
                  <Link href={`/dashboard/karyawan/edit/${post.id}`}>edit</Link>
                  <button>hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Karyawan;
