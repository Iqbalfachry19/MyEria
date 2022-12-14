'use client';
import { useState } from 'react';
import QRCode from 'qrcode.react';

type Props = {};

const Generate = (props: Props) => {
  const [qrCodeValue, setQrCodeValue] = useState('');

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById('qr-gen') as HTMLCanvasElement;
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');

    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrCodeValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <>
      <div className="border-2  mx-auto mt-10 hover:text-blue-400  hover:border-blue-400 py-4 transition-all duration-200 ease-out rounded-lg px-4">
        Generate QR
      </div>

      {qrCodeValue != '' && (
        <QRCode
          id="qr-gen"
          value={qrCodeValue}
          size={290}
          level={'H'}
          includeMargin={true}
        />
      )}
      <input
        className="outline-none ring-2 ring-gray-100 rounded-lg h-20 mt-10 p-2 hover:ring-blue-400"
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      />
      <p>
        Click for{' '}
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
      </p>
    </>
  );
};

export default Generate;
