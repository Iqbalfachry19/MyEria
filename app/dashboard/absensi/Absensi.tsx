'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import moment from 'moment';

import Link from 'next/link';
import { use, useReducer, useState, Suspense } from 'react';
type Props = {
  posts: any;
};

type Absensi = {
  id: number;
  nik: string;
  department: string;
  pukul: string;
  tanggal: string;
  status: string;
  keterangan: string;
  aksi: string;
  absensi: {
    karyawan: {
      nama: string;
      nik: string;
      department: string;
    };
  };
};
const columnHelper = createColumnHelper<Absensi>();
const columns = [
  columnHelper.accessor('id', {
    header: () => <span>No</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('absensi.karyawan.nama', {
    header: () => <span>Nama</span>,
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor('absensi.karyawan.nik', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>NIK</span>,
  }),
  columnHelper.accessor('absensi.karyawan.department', {
    header: () => 'Department',
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor('pukul', {
    header: 'Pukul',
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor('tanggal', {
    header: 'Tanggal',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('keterangan', {
    header: 'Keterangan',
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

const Absensi = ({ posts }: Props) => {
  const [data, setData] = useState(() => [...posts]);
  console.log(data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="overflow-y-scroll">
      <div className=" ">
        <h1>List Absensi Karyawan</h1>
        <Suspense>
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
