'use client';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import styles from '../page.module.css';
type Props = {};

const Generate = (props: Props) => {
  const [qrCodeValue, setQrCodeValue] = useState('');

  return (
    <>
      <div className={styles.card}>Generate QR</div>

      {qrCodeValue != '' && (
        <QRCode value={qrCodeValue} className={styles.containerColumn} />
      )}
      <input
        className={styles.card}
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      />
    </>
  );
};

export default Generate;
