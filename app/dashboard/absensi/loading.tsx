import { SpinnerCircular } from 'spinners-react';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SpinnerCircular />
    </div>
  );
}
