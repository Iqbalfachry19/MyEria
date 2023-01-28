'use client';

import Link from 'next/link';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import moment from 'moment';
import { useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
type Absensi = {
  id: number;
  nik: string;
  department: string;
  jamMasuk: Date;
  jamKeluar: Date;
  tanggal: Date;
  aksi: string;
  no: string;
  karyawan: {
    nama: string;
    nik: string;
    department: string;
  };
};

function Table({ posts }: any) {
  const [data, setData] = useState(() => [...posts]);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;
  useEffect(() => {
    setData(() => [...posts]);
  }, [posts]);
  const hapus = async (id: any, posts: any) => {
    setIsFetching(true);
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/deleteAbsensi`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };
  const columnHelper = createColumnHelper<Absensi>();
  const columns = [
    columnHelper.accessor('no', {
      header: () => <span>No</span>,
      cell: (info) => <span>{info.row.index + 1}</span>,
    }),
    columnHelper.accessor('karyawan.nama', {
      header: () => <span>Nama</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor('karyawan.nik', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>NIK</span>,
    }),
    columnHelper.accessor('karyawan.department', {
      header: () => 'Department',
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor('jamMasuk', {
      header: 'Jam Masuk',
      cell: (info) => (
        <span>{moment(info.getValue()).utcOffset(0).format('hh:mm')}</span>
      ),
    }),
    columnHelper.accessor('jamKeluar', {
      header: 'Jam Keluar',
      cell: (info) => (
        <span>{moment(info.getValue()).utcOffset(0).format('hh:mm')}</span>
      ),
    }),
    columnHelper.accessor('tanggal', {
      header: 'Tanggal',
      cell: (info) => (
        <span>{moment(info.getValue()).utcOffset(0).format('DD-MM-yyyy')}</span>
      ),
    }),
    columnHelper.accessor('id', {
      header: 'Aksi',
      cell: (info) => (
        <div className="space-x-2">
          <Link
            href={`/dashboard/karyawan/edit/${info.getValue()}`}
            className="bg-yellow-400 rounded-lg p-2"
          >
            edit
          </Link>
          <button
            className="bg-red-500 text-white rounded-lg p-2"
            onClick={() => hapus(info.getValue(), posts)}
          >
            hapus
          </button>
        </div>
      ),
    }),
  ];
  console.log(data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <h1>Jadwal Absensi Karyawan</h1>
      <table className="border-2  border-black ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border-2 p-2 border-black">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-2 p-2 border-black">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
