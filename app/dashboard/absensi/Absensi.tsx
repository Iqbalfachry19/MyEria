'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import moment from 'moment';

import Link from 'next/link';
import { use, useReducer, useState, Suspense, useEffect } from 'react';
import Button from './Button';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
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
  lokasi: string;
  keterangan: string;
  aksi: string;
  no: string;
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
  columnHelper.accessor('no', {
    header: () => <span>No</span>,
    cell: (info) => <span>{info.row.index + 1}</span>,
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
  columnHelper.accessor('lokasi', {
    header: 'Lokasi',
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
          href={`/dashboard/absensi/edit/${info.getValue()}`}
          className="bg-yellow-400 rounded-lg p-2"
        >
          edit
        </Link>
        <Button id={info.getValue()} />
      </div>
    ),
  }),
];

const Absensi = ({ posts }: Props) => {
  const [data, setData] = useState(() => [...posts]);
  useEffect(() => {
    setData(() => [...posts]);
  }, [posts]);
  console.log(data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="">
      <div className="flex items-center pb-1 justify-between space-x-2">
        <h1>List Absensi Karyawan</h1>
        <div className="flex space-x-2">
          <div className="flex flex-row space-x-2 items-center bg-red-500 text-white cursor-pointer rounded-lg p-2">
            <p>Filter </p>
            <span>
              <ChevronDownIcon className="w-4 h-4" />
            </span>
          </div>
          <h1 className="bg-red-500 text-white cursor-pointer rounded-lg p-2">
            Download rekap Absensi
          </h1>
        </div>
      </div>
      <Suspense>
        <div className="overflow-y-scroll flex h-2/3 ">
          <table className="flex-col border-2  border-black ">
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
        </div>
      </Suspense>
    </div>
  );
};

export default Absensi;
