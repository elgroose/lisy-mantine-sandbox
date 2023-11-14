import { Container, Select, RangeSlider, Slider, TextInput, Paper, Checkbox } from '@mantine/core';
import classes from './CommunityConfig.module.css';
import React, { useState } from 'react';

export function CommunityConfig() {
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
          <h1 className={classes.h1}>Superuser Configure the Community </h1>

{/* this code is just as inspo for the dropdown */}
          {/* <select onChange={(e) => selectedUser(e)} className=" form-select-control"> Please select the user {active && users.map((user: any) => ( {user.displayName} ))}
        const selectedUser = (e: any) => { setUser(e.target.id); }; */}

{/* pull the community and the select will have the name */}
          <TextInput
            label="communityId"
            placeholder="9ab23251-8c65-4142-9769-ce35eb048bb4"
            classNames={classes}
          />

          <TextInput
            label="communityRepresentative"
            placeholder="Julia Smith"
            classNames={classes}
          />



{/* NOT MVP BUT FOR FUTURE: create a normal form for lawyers ... create a lawyer table  and only select the practice name in the confif. values will come from ID */}
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

          <Checkbox defaultChecked label="bundleAllDocuments" my="md" />

{/* we want to remove this field and replace with a subsidy boolean */}
          <Checkbox defaultChecked label="communityHasSection8?" my="md" />



          <Checkbox defaultChecked label="tenantFriendlyRepayment" my="md" />

          <Checkbox defaultChecked label="PaymentPlanOfferForAll" my="md" />


          {/* GenerateSmallBalance is coupled with the range slider */}
          <Checkbox defaultChecked label="GenerateSmallBalance?" my="md" />

          <p my="lg">
            <b>Minimum and maximum for the small balance notices</b>
          </p>
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

        {/* La has specified that they do not want to send Payment Plan notices . if youre in LA -> the documnets will not be genrated and so we should not need extra confog logic to handle this */}
          {/* use rangeSLider to send these 2 variables... if that is taking too long in teh ui, just use fields to collect teh 2 variables independently delinquentAmount + smallBalanceAmount */}
          {/* discuss how we want to handle template selection / form maintance ... maybe a table with row select. maybe just multiselect */}
         {/* for example, these are just a few Seattle specific notices... these should be managed from a table */}
          <Checkbox defaultChecked label="GenerateCaresAct" my="md" />
          <Checkbox defaultChecked label="GenerateERPP" my="md" />


          

          <Select
            label="ImportReportSource"
            placeholder="Pick value"
            data={['Yardi', 'Real Page', 'Other']}
          />

          

 
 {/* This needs to be the leasing office address for the repaymnet address portion of the notices */}
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
