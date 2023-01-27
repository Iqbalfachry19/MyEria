'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Tambah = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();
  const create = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createPengumuman`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });
    setTitle('');
    setBody('');

    router.refresh();
  };
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={(e) => create(e)}>
        <h1>Tambah Karyawan</h1>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pengumuman"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Tambah Karyawan</button>
      </form>
    </div>
  );
};

export default Tambah;
