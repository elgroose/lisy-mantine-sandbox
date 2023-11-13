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



<Paper radius="md" p="xl"  withBorder className={classes.paperContainer}>

<Container size="m" >

<h1 className={classes.h1}>Community Configuration</h1>

    <TextInput label="CommunityID" placeholder="9ab23251-8c65-4142-9769-ce35eb048bb4" classNames={classes} />
    <TextInput label="CommunityApprovedSigner" placeholder="Jane Smith" classNames={classes} />
    
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
  
 <TextInput
          label="LawyerAddress"
          placeholder="4331 Lake Washington Blvd NE, Suite 200 Kirkland, WA 98033"
          mt="md"
          // {...form.getInputProps('lawyer.address')}
        />



<Select
      label="ImportReportSource"
      placeholder="Pick value"
      data={['Yardi', 'Real Page', 'Other']}
    />


 


<Checkbox
      defaultChecked
      label="Generate small balance notices?"
      my="md"
      
    />

{/* DelinquentAmount
SmallBalanceAmount */}

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
          { value: 1500, label: '$1500' }
        ]}
        thumbLabel={formatThumbLabel}
        my="lg"
        py="lg"
      />


<Checkbox
      defaultChecked
      label="Subsidy tenants"
      my="md"
    />

<Checkbox
      defaultChecked
      label="CommunityHasMultiAddress"
      my="md"
    />


<Checkbox
      defaultChecked
      label="PaymentPlanOfferForAll"
      my="md"
    />

 
 
 

</Container>

</Paper>


    <Paper radius="md" p="xl" withBorder className={classes.paperContainer}>

      <Container size="m"   >

      <h1 className={classes.h1}>Community Address</h1>

        <TextInput label="Name" placeholder="Camrose Apartments" classNames={classes} />

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

<Checkbox
      defaultChecked
      label="Multiple addresses"
      mt="md"
    />

        
      </Container>
    
    </Paper>


    <Paper radius="md" p="xl"  withBorder className={classes.paperContainer}>

      <Container size="m" >

      <h1 className={classes.h1}>Community Settings</h1>

      <TextInput label="Residence code" placeholder="pn10666" classNames={classes} />

      <TextInput label="Community email" placeholder="camrose@avenue5.com" classNames={classes} />

      <TextInput label="Community phone" placeholder="(206) 887-3723" classNames={classes} />



    


  

      </Container>

      </Paper>

    <Paper radius="md" p="xl"  withBorder className={classes.paperContainer}>

<Container size="m" >

<h1 className={classes.h1}>User Settings</h1>

    <TextInput label="Property management company" placeholder="Avenue5" classNames={classes} />


<Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={['On-site Property Manager', 'Assistant Property Manager', 'Operations Manager', 'Regional Property Manager', 'Owner', 'Other']}
          placeholder="Pick one"
          label="Who will be using Nupace to run notices?"
          classNames={classes}
        />


    <TextInput
          label="First name"
          placeholder="Lisy"
          // {...form.getInputProps('user.firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="ruiz"
          mt="md"
          // {...form.getInputProps('user.lastName')}
        />
 
        <TextInput
          label="Phone"
          placeholder="(425) 654-1022"
          mt="md"
          // {...form.getInputProps('user.phone')}
        />

      <TextInput
          label="Email"
          placeholder="pm.camrose@avenue5.com"
          mt="md"
          // {...form.getInputProps('user.email')}
        />
 

</Container>

</Paper>


<Paper radius="md" p="xl"  withBorder className={classes.paperContainer}>

<Container size="m" >

<h1 className={classes.h1}>Attorney Settings</h1>

    <TextInput
          label="Practice name"
          placeholder="Lisy"
          // {...form.getInputProps('lawyer.practiceName')}
        />
        <TextInput
          label="Name"
          placeholder="Alice Smith"
          mt="md"
          // {...form.getInputProps('lawyer.name')}
        />
 
        <TextInput
          label="Phone"
          placeholder="(415) 613-3033"
          mt="md"
          // {...form.getInputProps('lawyer.phone')}
        />

      <TextInput
          label="Email"
          placeholder="alice@kendallaw.com"
          mt="md"
          // {...form.getInputProps('lawyer.email')}
        />
 
 <TextInput
          label="Address"
          placeholder="4331 Lake Washington Blvd NE, Suite 200 Kirkland, WA 98033"
          mt="md"
          // {...form.getInputProps('lawyer.address')}
        />

</Container>

</Paper>








     </>
  );
}


