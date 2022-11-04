import { SpinnerCircular } from 'spinners-react';
import '~spinners-react/lib/SpinnerCircular.css';
import '~spinners-react/lib/index.css';
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SpinnerCircular />
    </div>
  );
}
