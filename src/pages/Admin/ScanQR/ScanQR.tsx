import { FC } from 'react';

import { QRScanner, UserWrapper } from '~/components';

const ScanQR: FC = () => {
  return (
    <UserWrapper hasContainer>
      <QRScanner />
    </UserWrapper>
  );
};

export default ScanQR;
