'use client';
import { useRouter } from 'next/router';
import React, { use, useState } from 'react';

type Props = {};
const getData = async (params: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/getKaryawanById/${params}`,
    {
      cache: 'no-store',
    },
  );
  const post = await res.json();
  return post as any;
};
const Ubah = ({ params }: any) => {
  const post = use(getData(params));
  console.log(post);
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');
  const [jabatan, setJabatan] = useState('');
  const router = useRouter();

  const edit = async (e: any) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateKaryawan`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        params,
        name,
        nik,
        jabatan,
      }),
    });
    setName('');
    setJabatan('');
    setNik('');
    router.refresh();
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
