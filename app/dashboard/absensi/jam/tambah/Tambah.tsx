'use client';

import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
const Tambah = ({ posts }: any) => {
  const [datas, setDatas] = useState(posts);
  const [selectedOption, setSelectedOption] = useState(posts[0].id);
  const [jamMasuk, setJamMasuk] = useState<Dayjs | null>(
    dayjs('2022-12-23T08:00'),
  );
  const [jamKeluar, setJamKeluar] = useState<Dayjs | null>(
    dayjs('2022-12-23T10:00'),
  );

  const router = useRouter();
  const create = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/createAbsensi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    setSelectedOption(posts[0].id);

    router.refresh();
  };
  return (
    <div className="flex px-2">
      <form onSubmit={(e) => create(e)} className="">
        <h1>Tambah Jam Absensi Karyawan</h1>
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
          <Suspense>
            <div className="flex flex-col mt-10">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Jam Keluar"
                  value={jamMasuk}
                  onChange={(newValue) => {
                    setJamMasuk(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
        
          <Suspense>
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
          </Suspense>
          <button type="submit">Tambah Jam Absensi Karyawan</button>
        </div>
      </form>
    </div>
  );
};

export default Tambah;
