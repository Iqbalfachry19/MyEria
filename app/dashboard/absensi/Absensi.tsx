'use client';
import { PrismaClient } from '@prisma/client';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import Link from 'next/link';
import { use, useReducer, useState, Suspense } from 'react';
type Props = {};
export const dynamic = 'force-dynamic';
type Absensi = {
  no: number;
  nama: string;
  nik: string;
  jabatan: number;
  jamMasuk: number;
  jamKeluar: string;
  aksi: string;
};
const columnHelper = createColumnHelper<Absensi>();
const columns = [
  columnHelper.accessor('no', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('nama', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('nik', {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('jabatan', {
    header: () => 'Jabatan',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('jamMasuk', {
    header: 'Scan Masuk',
  }),
  columnHelper.accessor('jamKeluar', {
    header: 'Scan Keluar',
  }),
  columnHelper.accessor('aksi', {
    header: 'Aksi',
  }),
];
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getIsiAbsensi`, {
    cache: 'no-store',
  });

  return res.json();
};
const Absensi = (props: Props) => {
  const posts = use(getData());
  const [data, setData] = useState(() => [...posts]);

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
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
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
                    <td key={cell.id}>
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
