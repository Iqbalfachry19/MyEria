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
    <div className="flex bg-white p-2 justify-center items-center">
      <form
        className="flex flex-col border border-black p-2"
        onSubmit={(e) => create(e)}
      >
        <h1>Tambah Pengumuman</h1>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          className="border border-gray-400 rounded-lg p-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pengumuman"
          value={body}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setBody(e.target.value)}
        />

        <button
          className="rounded-lg bg-blue-400 text-white p-2 mt-2"
          type="submit"
        >
          Tambah Pengumuman
        </button>
      </form>
    </div>
  );
};

export default Tambah;
