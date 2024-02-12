import { FC } from 'react';

import { QRGenerator, UserWrapper } from '~/components';

const QrCode: FC = () => {
  return (
    <UserWrapper hasContainer>
      <QRGenerator name='Name of Student' uniqueId='LRN or something' />
    </UserWrapper>
  );
};
export default QrCode;
