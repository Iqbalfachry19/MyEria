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

    router.push('/dashboard/karyawan');
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
          className="border border-gray-400 rounded-lg p-2 "
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="NIK"
          value={nik}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setNik(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="No HP"
          value={hp}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setHp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alamat"
          value={alamat}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setAlamat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="rounded-lg bg-blue-400 text-white p-2 mt-2"
          type="submit"
        >
          Ubah Karyawan
        </button>
      </form>
    </div>
  );
};

export default Ubah;
