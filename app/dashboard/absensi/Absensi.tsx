'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import Link from 'next/link';
import { use, useReducer, useState, Suspense } from 'react';
type Props = {
  posts: any;
};

type Absensi = {
  id: number;
  nama: string;
  nik: string;
  jabatan: number;
  waktuAbsensiMasuk: Date;
  waktuAbsensiKeluar: Date;
  aksi: string;
};
const columnHelper = createColumnHelper<Absensi>();
const columns = [
  columnHelper.accessor('id', {
    header: () => <span>No</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('nama', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('nik', {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>NIK</span>,
  }),
  columnHelper.accessor('jabatan', {
    header: () => 'Jabatan',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('waktuAbsensiMasuk', {
    header: 'Scan Masuk',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('waktuAbsensiKeluar', {
    header: 'Scan Keluar',
  }),
  columnHelper.accessor('id', {
    header: 'Aksi',
    cell: (info) => (
      <div className="space-x-2">
        <Link href={`/dashboard/karyawan/edit/${info.getValue()}`}>edit</Link>
        <button className="bg-red-500 text-white rounded-lg p-2">hapus</button>
      </div>
    ),
  }),
];

const Absensi = ({ posts }: Props) => {
  const [data, setData] = useState(() => [...posts]);
  console.log(data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="">
      <div>
        <h1>List Absensi Karyawan</h1>
        <Suspense>
          <table className="border-2 border-black">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="border-2 border-black">
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
                    <td key={cell.id} className="border-2 border-black">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Suspense>
      </div>
    </div>
  );
};

export default Absensi;
