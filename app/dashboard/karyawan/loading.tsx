import { BeatLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <BeatLoader color="#36d7b7" />
    </div>
  );
}
