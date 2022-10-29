'use client';
import { useState } from 'react';
import QRCode from 'qrcode.react';
import styles from '../page.module.css';
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
      <div className={styles.card}>Generate QR</div>

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
        className={styles.card}
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
