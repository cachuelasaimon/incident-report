import { FC } from 'react';

import { Paper, Stack, Typography } from '@mui/material';
import {
  AutocompleteElement,
  FormContainer,
  TextFieldElement,
  TextareaAutosizeElement,
  useForm,
} from 'react-hook-form-mui';
import { z } from 'zod';

import { UserWrapper } from '~/components';

const incidentReportSchema = z.object({
  incidentDate: z.string(),
  violators: z
    .array(z.object({ id: z.string(), label: z.string() }))
    .nullable(),
  reportedBy: z.string(),
  incidentType: z.string(),
  description: z.string(),
  location: z.string(),
  status: z.object({ id: z.string(), label: z.string() }),
});

export type IncidentReportFormSchema = z.infer<typeof incidentReportSchema>;

const IncidentReportForm: FC = () => {
  const formContext = useForm<IncidentReportFormSchema>({
    defaultValues: {
      incidentDate: new Date().toISOString(),
      violators: [],
      reportedBy: '',
      incidentType: '',
      description: '',
      location: '',
      status: { id: 'pending', label: 'Pending' },
    },
  });

  // ! Replace with real data\
  const names = [
    'John Ives',
    'Jane Osterman',
    'Bob Smith',
    'Alice Peterson',
    'Tom Quinn',
    'Sue Jacobs',
    'Jim Browning',
    'Mary Shelly',
    'Joe Goldberg',
    'Ann Taylor',
  ];

  const mockStudents = names.map((name, i) => ({
    name: name,
    uniqueId: `12345${i + 1}`,
  }));

  const incidentTypes = [
    'Fighting',
    'Bullying',
    'Theft',
    'Vandalism',
    'Tardiness',
  ];

  // const incidentStatuses = ['Pending', 'Verified', 'Resolved', 'Dismissed'];

  return (
    <UserWrapper hasContainer>
      <Typography variant='h3'>Incident Report</Typography>
      <Typography variant='body1' sx={{ mb: 3 }}>
        Make an incident report
      </Typography>

      <FormContainer formContext={formContext}>
        <Paper>
          <Stack spacing={2} p={2}>
            <TextFieldElement
              name='incidentDate'
              label='Incident Date'
              type='date'
            />

            <AutocompleteElement
              multiple
              options={mockStudents.map(({ name, uniqueId }) => ({
                id: uniqueId,
                label: name,
              }))}
              name='violators'
              label='Violators'
            />

            <AutocompleteElement
              options={incidentTypes.map((el) => ({
                id: el.toLowerCase(),
                label: el,
              }))}
              name='incidentType'
              label='Incident Type'
            />

            <TextFieldElement name='location' label='Location' />

            {/* <AutocompleteElement
              options={incidentStatuses.map((el) => ({
                id: el.toLowerCase(),
                label: el,
              }))}
              autocompleteProps={{
                disabled: true,
              }}
              name='status'
              label='Status'
            /> */}

            <TextareaAutosizeElement
              name='description'
              minRows={3}
              InputProps={{
                minRows: 3,
              }}
              label='Description'
            />
          </Stack>
        </Paper>
      </FormContainer>
    </UserWrapper>
  );
};

export default IncidentReportForm;
