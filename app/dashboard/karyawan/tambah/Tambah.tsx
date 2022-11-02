'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Tambah = () => {
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');
  const [jabatan, setJabatan] = useState('');
  const router = useRouter();
  const create = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createKaryawan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        nik,
        jabatan,
      }),
    });
    setName('');
    setJabatan('');
    setNik('');
  };
  return (
    <div>
      <form onSubmit={(e) => create(e)}>
        <h1>Tambah Karyawan</h1>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="NIK"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
        />
        <input
          type="text"
          placeholder="Jabatan"
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
        />
        <button type="submit">Tambah Karyawan</button>
      </form>
    </div>
  );
};

export default Tambah;
