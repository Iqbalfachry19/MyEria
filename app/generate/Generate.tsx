'use client';
import { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import Image from 'next/image';

type Props = {};

const Generate = (props: Props) => {
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [lokasi, setLokasi] = useState('');
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
  const handleInputChange = (e: any) => {
    setQrCodeValue(`{"lokasi":"${e.target.value}"}`);
    if (e.target.value === '') {
      setQrCodeValue('');
    }
  };
  return (
    <div className="flex flex-col  h-screen">
      <div className="border-2  mx-auto mt-10 hover:text-blue-400  hover:border-blue-400 py-4 transition-all duration-200 ease-out rounded-lg px-4">
        Generate QR
      </div>
      <div className="flex mt-10">
        <div
          id="bg"
          className="bg-cover  flex"
          style={{
            backgroundImage: `url('/bg.png')`,
            width: '21cm',
            height: '29.7cm',
          }}
        >
          {qrCodeValue != '' && (
            <>
              <QRCode
                id="qr-gen"
                value={qrCodeValue}
                size={300}
                level={'H'}
                includeMargin={true}
                style={{
                  zIndex: 2,
                  position: 'absolute',
                  margin: '12cm 6.6cm',
                }}
                className=""
              />
              <div className="w-20 h-20 absolute z-10 mt-[16cm] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/logo.png" className="" fill alt="" />
              </div>
              <div className="relative mx-72 inset-x-0">
                <p className="z-5 text-[#373737] font-sans text-4xl absolute   font-bold my-[21cm]">
                  {lokasi}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <h1 className="mt-10">Lokasi</h1>
      <input
        className="outline-none ring-2 ring-gray-100 rounded-lg h-20 p-2 hover:ring-blue-400"
        onChange={(e) => {
          handleInputChange(e);
          setLokasi(e.target.value);
        }}
      />

      <p>
        Click for{' '}
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
      </p>
    </div>
  );
};

export default Generate;
