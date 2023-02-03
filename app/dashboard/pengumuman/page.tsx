import React from 'react';
import Table from './Table';
const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getPengumuman`, {
    cache: 'no-store',
  });

  return res.json();
};
async function page() {
  const posts = await getData();
  return (
    <div className="flex flex-col  h-screen justify-center items-center">
      <Table posts={posts} />
    </div>
  );
}

export default page;
