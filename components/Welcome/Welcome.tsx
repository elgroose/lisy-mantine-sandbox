import { Container, Select, RangeSlider, Slider, TextInput, Paper, Checkbox } from '@mantine/core';
import classes from './Welcome.module.css';
import React, { useState } from 'react';

export function Welcome() {
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

      <Paper radius="md" p="xl" withBorder className={classes.paperContainer}>
        <Container size="m">
          <h1 className={classes.h1}>Superuser Configure the Community </h1>

          <TextInput
            label="communityId"
            placeholder="9ab23251-8c65-4142-9769-ce35eb048bb4"
            classNames={classes}
          />

          <TextInput
            label="communityApprovedSigner"
            placeholder="Julia SMith"
            classNames={classes}
          />

          <TextInput
            label="LawyerFirm"
            placeholder="Puckett & Redford"
            // {...form.getInputProps('lawyer.practiceName')}
          />

          <TextInput
            label="LawyerName"
            placeholder="Alice Smith"
            mt="md"
            // {...form.getInputProps('lawyer.name')}
          />

          <TextInput
            label="LawyerAddress"
            placeholder="4331 Lake Washington Blvd NE, Suite 200 Kirkland, WA 98033"
            mt="md"
            // {...form.getInputProps('lawyer.address')}
          />

          <TextInput
            label="LawyerPhone"
            placeholder="(415) 613-3033"
            mt="md"
            // {...form.getInputProps('lawyer.phone')}
          />

          <TextInput
            label="LawyerEmail"
            placeholder="alice@kendallaw.com"
            mt="md"
            // {...form.getInputProps('lawyer.email')}
          />

          <Checkbox defaultChecked label="BundleAllDocuments?" my="md" />

          <Checkbox defaultChecked label="communityHasSection8?" my="md" />

          <Checkbox defaultChecked label="communityHasMultiAddress" my="md" />

          <Checkbox defaultChecked label="Subsidy tenants" my="md" />

          <Checkbox defaultChecked label="tenantFriendlyRepayment" my="md" />

          <Checkbox defaultChecked label="PaymentPlanOfferForAll" my="md" />

          <p my="lg">
            <b>Minimum and maximum for the small balance notices</b>
          </p>

          {/* delinquentAmount + smallBalanceAmount */}
          <RangeSlider
            min={20}
            max={1500}
            value={values}
            onChange={setValues}
            labelAlwaysOn
            marks={[
              { value: 20, label: '$20' },
              { value: 1500, label: '$1500' },
            ]}
            thumbLabel={formatThumbLabel}
            my="lg"
            py="lg"
          />

          <Select
            label="ImportReportSource"
            placeholder="Pick value"
            data={['Yardi', 'Real Page', 'Other']}
          />

          <Checkbox defaultChecked label="GenerateCaresAct" my="md" />

          <Checkbox defaultChecked label="GenerateERPP" my="md" />

          <Checkbox defaultChecked label="GenerateSmallBalance?" my="md" />

          <Checkbox defaultChecked label="TenantFriendlyRepayment?" my="md" />

          <TextInput
            label="Address"
            placeholder="65 Camrose Ave"
            // {...form.getInputProps('community.address')}
          />
          <TextInput
            label="City"
            placeholder="Kirkland"
            mt="md"
            // {...form.getInputProps('community.city')}
          />

          <TextInput
            label="State"
            placeholder="Washington"
            mt="md"
            // {...form.getInputProps('community.city')}
          />

          <TextInput
            label="Zip"
            placeholder="98033"
            mt="md"
            // {...form.getInputProps('community.city')}
          />

         </Container>
      </Paper>

   
    </>
  );
}
