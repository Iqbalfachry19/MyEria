'use client';

import Link from 'next/link';
import Button from './Button';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import moment from 'moment';
import { useState } from 'react';
type Absensi = {
  id: number;
  title: string;
  body: string;

  aksi: string;
};
const columnHelper = createColumnHelper<Absensi>();
const columns = [
  columnHelper.accessor('id', {
    header: () => <span>No</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('title', {
    header: () => <span>Judul</span>,
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor('body', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Pengumuman</span>,
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
        <button className="bg-red-500 text-white rounded-lg p-2">hapus</button>
      </div>
    ),
  }),
];
function Table({ posts }: any) {
  const [data, setData] = useState(() => [...posts]);
  console.log(data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <h1>List Pengumuman</h1>
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
