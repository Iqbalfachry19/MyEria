'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {};

const Ubah = ({ params, post }: any) => {
  console.log(post);
  const [id, setId] = useState(post.id);
  const [lokasi, setLokasi] = useState(post.lokasi);
  const [status, setStatus] = useState(post.status);
  const [keterangan, setKeterangan] = useState(post.keterangan);
  const router = useRouter();

  const edit = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateIsiAbsensi`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        lokasi,
        status,
        keterangan,
      }),
    });
    setLokasi('');
    setStatus('');
    setKeterangan('');
    router.push('/dashboard/absensi');
    router.refresh();
  };
  return (
    <div>
      <form
        className="flex flex-col border border-black p-2"
        onSubmit={(e) => edit(e)}
      >
        <h1>Edit Isi Absensi</h1>
        <input
          type="text"
          placeholder="Lokasi"
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Keterangan"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
        <button type="submit">Ubah Isi Absensi</button>
      </form>
    </div>
  );
};

export default Ubah;