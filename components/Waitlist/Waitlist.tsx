import { Container, Title, Text, TextInput, Button, Group } from '@mantine/core';

import React from 'react';

export function Waitlist() {
  return (
    //     <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    //     <Title order={2}>Join Our Waitlist</Title>
    //     <Text size="md" align="center" style={{ marginTop: '1rem' }}>
    //       Sign up to get early access to our exclusive offers and updates.
    //     </Text>

    //     <Group align="center" spacing="sm" style={{ marginTop: '2rem', width: '100%', maxWidth: '600px' }}>
    //       <TextInput
    //         placeholder="Your email"
    //         required
    //         style={{ flexGrow: 1 }}
    //       />
    //       <Button variant="filled">
    //         Join the Waitlist
    //       </Button>
    //     </Group>
    //   </Container>

    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Title order={2}>Join Our Waitlist</Title>
      <Text size="md" align="center" style={{ marginTop: '1rem' }}>
        Sign up to get early access to our exclusive offers and updates.
      </Text>
      <Group
        align="center"
        spacing="sm"
        style={{ marginTop: '2rem', width: '100%', maxWidth: '500px' }}
      >
        <TextInput placeholder="Your email" required style={{ flexGrow: 1 }} />
        <Button variant="filled">Join the Waitlist</Button>
      </Group>
    </Container>
  );
}
