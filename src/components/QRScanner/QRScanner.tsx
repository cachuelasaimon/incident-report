import { FC, useState } from 'react';

// @ts-ignore
import QrReader from 'react-qr-scanner';

const QRScanner: FC = () => {
  const [scannedData, setScannedData] = useState(
    'Please hold the QR code in front of the camera.'
  );

  return (
    <>
      Scanner Here
      <p>{scannedData}</p>
      <QrReader
        // @ts-ignore
        onScan={(result) => {
          console.log({ result });
          setScannedData(result);
        }}
        // @ts-ignore
        onError={(error) => {
          console.log({ error });
        }}
        onLoad={() => {
          console.log('Loaded');
        }}
        style={{ width: '100%' }}
        facingMode='environment'
        delay={500}
      />
    </>
  );
};

export default QRScanner;
