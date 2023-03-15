'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {};

const Ubah = ({ params, post }: any) => {
  console.log(post);
  const [id, setId] = useState(post.id);
  const [pukul, setPukul] = useState(post.pukul);
  const [tanggal, setTanggal] = useState(post.tanggal);
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
        pukul,
        tanggal,
        lokasi,
        status,
        keterangan,
      }),
    });
    setPukul('');
    setTanggal('');
    setLokasi('');
    setStatus('');
    setKeterangan('');

    router.refresh();
    router.push('/dashboard/absensi');
  };
  return (
    <div className="p-2">
      <form
        className="flex flex-col border border-black p-2"
        onSubmit={(e) => edit(e)}
      >
        <h1>Edit Isi Absensi</h1>
        <input
          type="text"
          placeholder="Pukul"
          value={pukul}
          className="border border-gray-400 rounded-lg p-2 "
          onChange={(e) => setPukul(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tanggal"
          value={tanggal}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setTanggal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lokasi"
          value={lokasi}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setLokasi(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Keterangan"
          value={keterangan}
          className="border border-gray-400 rounded-lg p-2 mt-2"
          onChange={(e) => setKeterangan(e.target.value)}
        />
        <button
          className="rounded-lg bg-blue-400 text-white p-2 mt-2"
          type="submit"
        >
          Ubah Isi Absensi
        </button>
      </form>
    </div>
  );
};

export default Ubah;
