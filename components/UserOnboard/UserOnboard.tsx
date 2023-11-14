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

          {/* This will be created in Supabase. We need to A automatically paste here or B lisy will copy/paste manually. This MUST match supabase ID... G will use ID as an encrypted password. Paired with email creates authentication*/}

          <TextInput
            label="AppUserId"
            placeholder="Automatically generated in supabase... TBD how we match it here"
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

          {/* TBD : We would like to pass these 2 varaibles to the API in one call. The PmorgName shoudl be selected from a dropdown. That should prepopulate the PmorgId. If the PmorgName is not in the dropdown, should  the user be able to type it in and the PmorgId will be generated. */}
          {/* If other is selected, should teh user be prompted to type in teh new onboarding users pmorg */}
          {/* We need to talk with Matt and discuss best practice */}
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={['Avenue5', 'Greystar', 'Thrive ', 'Other']}
            placeholder="Pick one"
            label="PmorgName"
            classNames={classes}
          />

          <TextInput label="pmorgId" placeholder="Avenue5 Residential" classNames={classes} />

          <TextInput label="FirstName" placeholder="Jane" classNames={classes} />

          <TextInput label="LastName" placeholder="Smith" classNames={classes} />

          {/* Same as above.... we will use whatever solution we come up with for the PMORG */}
          <TextInput
            label="CommunityID"
            placeholder="9ab23251-8c65-4142-9769-ce35eb048bb4"
            classNames={classes}
          />

{/* if we use select, make sure its easy for the superuser to search  for teh community ... i dont want to scroll. there will be HUNDREDS of communities */}
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={['Camrose Apartments', 'Villaggio', 'Keelers ', 'Yarrowood Highlands']}
            placeholder="Pick one"
            label="CommunityName"
            classNames={classes}
          />

 
 {/* this is the yardi code */}
          <TextInput label="CommunityCode" placeholder="pn10644" classNames={classes} />


{/* and for a third time.... how do we wnat to pass this */}

          <TextInput label="OwnerId" placeholder="TBD" classNames={classes} />
 
          <Select
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={['Berg Holdings', 'Fifteen Group', 'ABC LLC ', 'XYZ LLC']}
            placeholder="Pick one"
            label="OwnerName"
            classNames={classes}
          />

{/* TBD: do we want one single object to retunr pmOrg, Owner , and community name instead of 3 seperate calls?  */}


        </Container>
      </Paper>
    </>
  );
}
