'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import moment from 'moment';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Link from 'next/link';
import { use, useReducer, useState, Suspense, useEffect } from 'react';
import Button from './Button';
import * as XLSX from 'xlsx';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Router, { useRouter } from 'next/navigation';
type Props = {
  posts: any;
  karyawan?: any;
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

const Absensi = ({ posts, karyawan }: Props) => {
  const [filter, setFilter] = useState('filter');
  const [data, setData] = useState(() => [...posts]);
  const [datas, setDatas] = useState(karyawan);
  const [selectedOption, setSelectedOption] = useState('semua');
  const router = useRouter();
  const download = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: '#my-table' });
    doc.save('rekap.pdf');
  };
  const downloadExcel = () => {
    const ws = XLSX.utils.table_to_book(document.getElementById('my-table'));

    XLSX.writeFile(ws, 'Absensi.xlsx');
  };
  const handleKaryawan = (e: any) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);

    if (e.target.value == 'semua') {
      setData(() => [...posts]);
      setFilter('filter');
    }
    if (
      e.target.value !== 'semua' &&
      karyawan[e.target.value].id == karyawan[e.target.value].id
    ) {
      const post = posts.filter(
        (p: any) => p.absensi.karyawan.nama == karyawan[e.target.value].nama,
      );
      setData(() => [...post]);
      setFilter('filter');
    }
  };
  const handleChange = (e: any) => {
    if (e.target.value == 10 && selectedOption == 'semua') {
      const post = posts.filter((p: any) => p.status == 'in');
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 20 && selectedOption == 'semua') {
      const post = posts.filter((p: any) => p.status == 'out');
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 30 && selectedOption == 'semua') {
      const post = posts.filter((p: any) => p.keterangan == 'TIDAK TELAT');
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 40 && selectedOption == 'semua') {
      const post = posts.filter((p: any) => p.status == 'TELAT');
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 50 && selectedOption == 'semua') {
      const date = new Date();
      const month = date.getMonth();
      console.log(month);
      const post = posts.filter((p: any) => {
        const dateString = p.tanggal;
        const dateArr = dateString.split('-');
        const day = dateArr[0];
        const month = dateArr[1] - 1;
        const year = dateArr[2];
        const tdate = new Date(year, month, day);
        const tmonth = tdate.getMonth();
        const date = new Date();
        const targetMonth = date.getMonth();
        return targetMonth === tmonth;
      });
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 60 && selectedOption == 'semua') {
      const date = new Date();
      const month = date.getMonth() - 1;
      console.log(month);
      const post = posts.filter((p: any) => {
        const dateString = p.tanggal;
        const dateArr = dateString.split('-');
        const day = dateArr[0];
        const month = dateArr[1] - 1;
        const year = dateArr[2];
        const tdate = new Date(year, month, day);
        const tmonth = tdate.getMonth();
        const date = new Date();
        let targetMonth = date.getMonth() - 1;
        if (targetMonth < 0) {
          targetMonth = 11;
        }
        return targetMonth === tmonth;
      });
      setData(() => [...post]);
      setFilter(e.target.value);
    }
    if (e.target.value == 10 && selectedOption !== 'semua') {
      const post = posts.filter(
        (p: any) =>
          p.status == 'in' &&
          p.absensi.karyawan.nama == karyawan[selectedOption].nama,
      );
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 20 && selectedOption !== 'semua') {
      const post = posts.filter(
        (p: any) =>
          p.status == 'out' &&
          p.absensi.karyawan.nama == karyawan[selectedOption].nama,
      );
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 30 && selectedOption !== 'semua') {
      const post = posts.filter(
        (p: any) =>
          p.keterangan == 'TIDAK TELAT' &&
          p.absensi.karyawan.nama == karyawan[selectedOption].nama,
      );
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 40 && selectedOption !== 'semua') {
      const post = posts.filter(
        (p: any) =>
          p.status == 'TELAT' &&
          p.absensi.karyawan.nama == karyawan[selectedOption].nama,
      );
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 50 && selectedOption !== 'semua') {
      const date = new Date();
      const month = date.getMonth();
      console.log(month);
      const post = posts.filter((p: any) => {
        const dateString = p.tanggal;
        const dateArr = dateString.split('-');
        const day = dateArr[0];
        const month = dateArr[1] - 1;
        const year = dateArr[2];
        const tdate = new Date(year, month, day);
        const tmonth = tdate.getMonth();
        const date = new Date();
        const targetMonth = date.getMonth();
        return (
          targetMonth === tmonth &&
          p.absensi.karyawan.nama == karyawan[selectedOption].nama
        );
      });
      setData(() => [...post]);
      setFilter(e.target.value);
    } else if (e.target.value == 60 && selectedOption !== 'semua') {
      const date = new Date();
      const month = date.getMonth() - 1;
      console.log(month);
      const post = posts.filter((p: any) => {
        const dateString = p.tanggal;
        const dateArr = dateString.split('-');
        const day = dateArr[0];
        const month = dateArr[1] - 1;
        const year = dateArr[2];
        const tdate = new Date(year, month, day);
        const tmonth = tdate.getMonth();
        const date = new Date();
        let targetMonth = date.getMonth() - 1;
        if (targetMonth < 0) {
          targetMonth = 11;
        }
        return (
          targetMonth === tmonth &&
          p.absensi.karyawan.nama == karyawan[selectedOption].nama
        );
      });
      setData(() => [...post]);
      setFilter(e.target.value);
    }
  };

  useEffect(() => {
    setData(() => [...posts]);
  }, [posts]);

  const table = useReactTable({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="bg-white p-2">
      <div className="flex items-center pb-1 pt-4 justify-between space-x-2">
        <h1 className="font-bold text-xl">List Absensi Karyawan</h1>
        <div className="flex space-x-2">
          <div>
            <label>Karyawan</label>
            <select
              className="border border-gray-400 rounded-lg p-2"
              value={selectedOption}
              onChange={(e) => handleKaryawan(e)}
            >
              <option value="semua">Semua Karyawan</option>
              {datas.map((post: any, id: any) => (
                <option key={post.id} value={id}>
                  {post.nama}
                </option>
              ))}
            </select>
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Filter"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={10}>Status In</MenuItem>
              <MenuItem value={20}>Status Out</MenuItem>
              <MenuItem value={30}>Tidak Telat</MenuItem>
              <MenuItem value={40}>Telat</MenuItem>
              <MenuItem value={50}>Bulan Ini</MenuItem>
              <MenuItem value={60}>Bulan Lalu</MenuItem>
            </Select>
          </FormControl>

          <button
            onClick={download}
            className="bg-red-500 text-white cursor-pointer rounded-lg p-2"
          >
            Download Rekap Absensi PDF
          </button>
          <button
            onClick={downloadExcel}
            className="bg-red-500 text-white cursor-pointer rounded-lg p-2"
          >
            Download Rekap Absensi EXCEL
          </button>
        </div>
      </div>
      <Suspense>
        <div className="overflow-y-scroll flex-col flex h-5/6 ">
          <table id="my-table" className="flex-col border-2  border-black ">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border-2 bg-green-500 p-2 border-black"
                    >
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
          <div className="h-2" />
          <div className="flex items-center gap-2">
            <button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {'<<'}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {'<'}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {'>'}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {'>>'}
            </button>
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
              </strong>
            </span>
            <span className="flex items-center gap-1">
              | Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border p-1 rounded w-16"
              />
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Absensi;
