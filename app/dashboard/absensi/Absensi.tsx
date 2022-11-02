import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
type Props = {};
export const dynamic = 'force-dynamic';
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}
const getData = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.absensi.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return posts as any[];
};
const Absensi = asyncComponent(async (props: Props) => {
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

export default Absensi;