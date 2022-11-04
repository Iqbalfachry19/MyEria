'use client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

type Props = {};

const Ubah = ({ params, post }: any) => {
  console.log(post);
  const [name, setName] = useState(post.nama);
  const [nik, setNik] = useState(post.nik);
  const [jabatan, setJabatan] = useState(post.jabatan);
  const router = useRouter();

  const edit = async (e: any) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateKaryawan`, {
      method: 'PUT',
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
    router.refresh();
    router.push('/dashboard/karyawan');
  };
  return (
    <div>
      <form onSubmit={(e) => edit(e)}>
        <h1>Edit Karyawan</h1>
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
        <button type="submit">Ubah Karyawan</button>
      </form>
    </div>
  );
};

export default Ubah;
