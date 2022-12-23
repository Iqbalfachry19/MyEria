'use client';
type Props = {};
import { useEffect } from 'react';
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => console.error(error), [error]);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
};

export default Error;
