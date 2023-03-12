'use client';
import { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import Image from 'next/image';
import html2canvas from 'html2canvas';
type Props = {};

const Generate = (props: Props) => {
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [lokasi, setLokasi] = useState('');
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvasEl = document.getElementById('bg');
    if (!canvasEl) {
      return;
    }
    html2canvas(canvasEl).then((canvas) => {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${qrCodeValue}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
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
      <div className="flex overflow-y-auto mt-10">
        <div
          id="bg"
          className="bg-cover relative flex"
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
              <div className="w-16 h-20 absolute z-10 mt-[16cm] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/logo.png" className="" fill alt="" />
              </div>

              <p className="flex z-5 text-[#373737] font-sans mx-auto text-4xl justify-center items-center text-center  font-bold my-[21.8cm]">
                {lokasi}
              </p>
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
