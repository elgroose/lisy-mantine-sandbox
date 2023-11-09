import { Container, Select, TextInput, Paper, Checkbox } from '@mantine/core';
 // import classes from './ContainedInput.module.css';
import classes from './Welcome.module.css';

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

  return (
    <>
    <Paper radius="md" p="xl"  withBorder className={classes.paperContainer}>

      <Container size="m" >

      <h1 className={classes.h1}>Community Address</h1>

        <TextInput label="Community name" placeholder="Camrose Apartments" classNames={classes} />

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
    />

<Checkbox
      defaultChecked
      label="Subsidy tenants"
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


<Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={['On-site Property Manager', 'Assistant Property Manager', 'Regional Property Manager', 'Owner', 'Other']}
          placeholder="Pick one"
          label="Who will be using Nupace to run notices?"
          classNames={classes}
        />

    <TextInput label="Property managers" placeholder="Avenue5" classNames={classes} />



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


<Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={['On-site Property Manager', 'Assistant Property Manager', 'Regional Property Manager', 'Owner', 'Other']}
          placeholder="Pick one"
          label="Who will be using Nupace to run notices?"
          classNames={classes}
        />

    <TextInput label="Property managers" placeholder="Avenue5" classNames={classes} />



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








     </>
  );
}


