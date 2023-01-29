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
  const [hp, setHp] = useState(post.hp);
  const [alamat, setAlamat] = useState(post.alamat);
  const [username, setUsername] = useState(post.username);
  const router = useRouter();

  const edit = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updatePengumuman`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        nik,
        department,
        hp,
        alamat,
        username,
      }),
    });
    setName('');
    setDepartment('');
    setNik('');
    setHp('');
    setAlamat('');
    setUsername('');

    router.push('/dashboard/pengumuman');
    router.refresh();
  };
  return (
    <div>
      <form
        className="flex flex-col border border-black p-2"
        onSubmit={(e) => edit(e)}
      >
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
        <input
          type="text"
          placeholder="No HP"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Ubah Karyawan</button>
      </form>
    </div>
  );
};

export default Ubah;
