import React from 'react';

type Props = {};
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}
const Tambah = asyncComponent(async (props: Props) => {
  return <div>Tambah Karyawan</div>;
});

export default Tambah;
