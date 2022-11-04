'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

const Button = ({ id }: any) => {
  const router = useRouter();
  const hapus = async (id: any) => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/deleteKaryawan`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    router.refresh();
  };
  return <button onClick={() => hapus(id)}>hapus</button>;
};

export default Button;
