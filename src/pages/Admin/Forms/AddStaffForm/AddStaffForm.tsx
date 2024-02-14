import { FC } from 'react';

import { Typography } from '@mui/material';

import { UserWrapper } from '~/components';

const AddStaffForm: FC = () => {
  return (
    <UserWrapper hasContainer>
      <Typography variant='h1'>Add Staff</Typography>
      <Typography variant='body1'>Add a new staff member</Typography>
    </UserWrapper>
  );
};

export default AddStaffForm;
