import { SpinnerCircular } from 'spinners-react';
import 'spinners-react/lib/SpinnerCircular.css';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SpinnerCircular />
    </div>
  );
}
