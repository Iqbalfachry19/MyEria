'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Tambah = () => {
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');
  const [department, setDepartment] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hp, setHp] = useState('');
  const [alamat, setAlamat] = useState('');
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
        username,
        password,
        hp,
        alamat,
        department,
      }),
    });
    setName('');
    setDepartment('');
    setNik('');
    setUsername('');
    setPassword('');
    setAlamat('');
    setHp('');
    router.refresh();
  };
  return (
    <div className="flex justify-center items-center p-2">
      <form
        onSubmit={(e) => create(e)}
        className="flex flex-col border p-2 border-black"
      >
        <h1>Tambah Karyawan</h1>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="NIK"
          value={nik}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setNik(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="HP"
          value={hp}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setHp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alamat"
          value={alamat}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setAlamat(e.target.value)}
        />
        <button
          className="rounded-lg bg-blue-400 text-white p-2 mt-2"
          type="submit"
        >
          Tambah Karyawan
        </button>
      </form>
    </div>
  );
};

export default Tambah;
