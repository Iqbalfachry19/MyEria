'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Tambah = ({ posts }: any) => {
  const [datas, setDatas] = useState(posts);
  const [selectedOption, setSelectedOption] = useState(posts[0].id);

  const [nik, setNik] = useState('');
  const [jabatan, setJabatan] = useState('');
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
    setJabatan('');
    setNik('');
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
          <input
            type="text"
            placeholder="Jam Masuk"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
          <input
            type="text"
            placeholder="Jam Keluar"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
          />
          <button type="submit">Tambah Jam Absensi Karyawan</button>
        </div>
      </form>
    </div>
  );
};

export default Tambah;
