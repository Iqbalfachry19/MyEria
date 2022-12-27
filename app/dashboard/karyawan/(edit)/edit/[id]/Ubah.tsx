'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {};

const Ubah = ({ params, post }: any) => {
  console.log(post);
  const [id, setId] = useState(post.id);
  const [name, setName] = useState(post.nama);
  const [nik, setNik] = useState(post.nik);
  const [department, setDepartment] = useState(post.department);
  const router = useRouter();

  const edit = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateKaryawan`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        nik,
        department,
      }),
    });
    setName('');
    setDepartment('');
    setNik('');
    router.push('/dashboard/karyawan');
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
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">Ubah Karyawan</button>
      </form>
    </div>
  );
};

export default Ubah;
