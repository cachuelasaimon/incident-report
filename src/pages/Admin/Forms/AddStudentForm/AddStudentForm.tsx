import { FC } from 'react';

import { Typography } from '@mui/material';

import { UserWrapper } from '~/components';

const AddStudentForm: FC = () => {
  return (
    <UserWrapper hasContainer>
      <Typography variant='h1'>Add Student</Typography>
      <Typography variant='body1'>Add a new student</Typography>
    </UserWrapper>
  );
};

export default AddStudentForm;
