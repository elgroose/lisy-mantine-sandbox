import { Container, Select, RangeSlider, Slider, TextInput, Paper, Checkbox } from '@mantine/core';
import classes from './UserOnboard.module.css';
import React, { useState } from 'react';

export function UserOnboard() {
  // const form = useForm({
  //   initialValues: {
  //     terms: false,
  //     community: {
  //       address: '',
  //       city: '',
  //     },
  //   },
  // });

  const [values, setValues] = useState([20, 1500]);
  const formatThumbLabel = (value) => `$${value}`;

  return (
    <>
      <Paper radius="md" p="xl" withBorder className={classes.paperContainer}>
        <Container size="m">
          <h1 className={classes.h1}>Superuser Register a New User</h1>

          <TextInput
            label="AppUserId"
            placeholder="isnt this automaically created?"
            classNames={classes}
          />

          <TextInput
            label="App User Email"
            placeholder="jane.smith@avenue5.aom"
            classNames={classes}
          />
{/* Role */}
<Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={[
              'On-site Property Manager',
              'Assistant Property Manager',
              'Operations Manager',
              'Regional Property Manager',
              'Owner',
              'Other',
            ]}
            placeholder="Pick one"
            label="Who will be using Nupace to run notices?"
            classNames={classes}
          />

          <TextInput label="PmorgId" placeholder="89827675276898" classNames={classes} />

          <TextInput label="PmorgName" placeholder="Avenue5 Residential" classNames={classes} />

          <TextInput label="FirstName" placeholder="Jane" classNames={classes} />

          <TextInput label="LastName" placeholder="Smith" classNames={classes} />

          <TextInput
            label="CommunityID"
            placeholder="9ab23251-8c65-4142-9769-ce35eb048bb4"
            classNames={classes}
          />

          <TextInput label="CommunityName" placeholder="Camrose Apartments" classNames={classes} />

          <TextInput label="CommunityName" placeholder="Camrose Apartments" classNames={classes} />

          <TextInput label="CommunityCode" placeholder="TBD" classNames={classes} />

          <TextInput label="OwnerId" placeholder="TBD" classNames={classes} />

          <TextInput label="OwnerName" placeholder="TBD" classNames={classes} />
        </Container>
      </Paper>

      
   
    </>
  );
}
