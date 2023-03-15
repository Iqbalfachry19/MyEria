'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {};

const Ubah = ({ params, post }: any) => {
  console.log(post);
  const [id, setId] = useState(post.id);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

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
        title,
        body,
      }),
    });
    setTitle('');
    setBody('');

    router.push('/dashboard/pengumuman');
    router.refresh();
  };
  return (
    <div>
      <form
        className="flex flex-col border border-black p-2"
        onSubmit={(e) => edit(e)}
      >
        <h1>Edit Pengumuman</h1>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          className="border border-gray-400 rounded-lg p-2 "
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
          Ubah Pengumuman
        </button>
      </form>
    </div>
  );
};

export default Ubah;
