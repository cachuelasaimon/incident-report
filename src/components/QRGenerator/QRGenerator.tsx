import { FC } from 'react';

import { QRCodeSVG } from 'qrcode.react';

interface QRGeneratorProps {
  uniqueId?: string;
  name?: string;
}

const QRGenerator: FC<QRGeneratorProps> = ({ uniqueId, name }) => {
  return (
    <div>
      <h1>QR Generator</h1>
      <p>Unique ID: {uniqueId}</p>
      <p>Name: {name}</p>
      <QRCodeSVG value={JSON.stringify({ name, uniqueId })} />
    </div>
  );
};
export default QRGenerator;
