import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import Button from './Button';
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
              <th>Department</th>
              <th>Jam Masuk</th>
              <th>Jam Keluar</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{post.karyawan.nama}</td>
                <td>{post.karyawan.nik}</td>
                <td>{post.karyawan.department}</td>
                <td>{moment(post.jamMasuk).utcOffset(0).format('hh:mm A')}</td>
                <td>{moment(post.jamKeluar).utcOffset(0).format('hh:mm A')}</td>
                <td>
                  {moment(post.tanggal).utcOffset(0).format('DD-MM-yyyy')}
                </td>
                <td>
                  <Link href={`/dashboard/karyawan/edit/${post.idKaryawan}`}>
                    edit
                  </Link>
                  <Button id={post.id}>hapus</Button>
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
