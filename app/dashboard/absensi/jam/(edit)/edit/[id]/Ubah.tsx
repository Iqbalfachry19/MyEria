'use client';

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useRouter } from 'next/navigation';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';

const Ubah = ({ params, post, karyawan }: any) => {
  console.log(post);
  const [id, setId] = useState(post.id);
  dayjs.extend(utc);
  const [datas, setDatas] = useState(karyawan);
  const [selectedOption, setSelectedOption] = useState(post.idKaryawan);
  const [jamMasuk, setJamMasuk] = useState<Dayjs | null>(
    dayjs(post.jamMasuk).utcOffset(0),
  );
  const [tanggal, setTanggal] = useState<Dayjs | null>(
    dayjs(post.tanggal).utcOffset(0),
  );
  const [jamKeluar, setJamKeluar] = useState<Dayjs | null>(
    dayjs(post.jamKeluar).utcOffset(0),
  );
  const router = useRouter();

  const edit = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateAbsensi`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        jamMasuk,
        jamKeluar,
        tanggal,
      }),
    });

    router.push('/dashboard/absensi/jam');
    router.refresh();
  };
  return (
    <div className="p-2">
      <form
        className="flex flex-col border border-black p-2"
        onSubmit={(e) => edit(e)}
      >
        <h1>Edit Jam Absensi Karyawan</h1>
        <div className="flex flex-col">
          <label>Karyawan</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {datas.map((post: any) => (
              <option key={post.id} value={post.id}>
                {post.nama}
              </option>
            ))}
          </select>

          <div className="flex flex-col mt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Jam Masuk"
                value={jamMasuk}
                onChange={(newValue) => {
                  setJamMasuk(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div className="flex flex-col mt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Jam Keluar"
                value={jamKeluar}
                onChange={(newValue) => {
                  console.log(newValue);
                  setJamKeluar(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="flex flex-col mt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Tanggal"
                inputFormat="DD-MM-YYYY"
                value={tanggal}
                onChange={(newValue) => {
                  setTanggal(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <button
            className="rounded-lg bg-blue-400 text-white p-2 mt-2"
            type="submit"
          >
            Ubah Jam Absensi Karyawan
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ubah;
