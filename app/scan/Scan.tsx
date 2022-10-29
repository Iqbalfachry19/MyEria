'use client';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import styles from '../page.module.css';

type Props = {};

const Scan = (props: Props) => {
  const [data, setData] = useState('No result');

  return (
    <div className={styles.container}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: 'environment' }}
        style={{ width: '40%', height: '40%' }}
      />
      <p>{data}</p>
    </div>
  );
};

export default Scan;
