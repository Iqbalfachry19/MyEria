'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TimePicker from 'react-time-picker';
const Tambah = ({ posts }: any) => {
  const [datas, setDatas] = useState(posts);
  const [selectedOption, setSelectedOption] = useState(posts[0].id);
  const [jamMasuk, setJamMasuk] = useState('10:00');
  const [jamKeluar, setJamKeluar] = useState('10:00');

  const router = useRouter();
  const create = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createAbsensi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    setSelectedOption(posts[0].id);

    router.refresh();
  };
  return (
    <div className="flex">
      <form onSubmit={(e) => create(e)}>
        <h1>Tambah Jam Absensi Karyawan</h1>
        <div className="flex flex-col">
          <label>Karyawan</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {datas.map((post: any) => (
              <option key={post.id} value={post.id}>
                {post.nama}
              </option>
            ))}
          </select>
          <label>Jam Masuk</label>
          <TimePicker onChange={setJamMasuk} value={jamMasuk} />
          <label>Jam Keluar</label>
          <TimePicker onChange={setJamKeluar} value={jamKeluar} />
          <button type="submit">Tambah Jam Absensi Karyawan</button>
        </div>
      </form>
    </div>
  );
};

export default Tambah;
