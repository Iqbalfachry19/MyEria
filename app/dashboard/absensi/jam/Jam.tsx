import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
type Props = {};
import moment from 'moment';
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
      <div>
        <h1>Jadwal Absensi Karyawan</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>NIK</th>
              <th>Jabatan</th>
              <th>Jam Masuk</th>
              <th>Jam Keluar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{post.karyawan.nama}</td>
                <td>{post.karyawan.nik}</td>
                <td>{post.karyawan.jabatan}</td>
                <td>{moment(post.jamMasuk).utcOffset(0).format('hh:mm A')}</td>
                <td>{moment(post.jamKeluar).utcOffset(0).format('hh:mm A')}</td>
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
};

export default Absensi;
