import { Container, Title, Text, TextInput, Button, Group } from '@mantine/core';

import React from 'react';

export function Waitlist() {
  return (
   
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Title order={1}>Launching soon</Title>

      <Text fz="lg" lh="md" align="center" style={{ marginTop: '1rem', maxWidth: '800px' }}>
        We're onboarding properties in early 2024. Sign up for early access!
      </Text>

      <Group
        align="center"
        spacing="sm"
        style={{ marginTop: '2rem', width: '100%', maxWidth: '550px' }}
      >
        <TextInput placeholder="Your email" required style={{ flexGrow: 1 }} />

        <Button
          variant="gradient"
          gradient={{ from: 'rgba(0,159,255)', to: 'rgba(0,81,255)', deg: 185 }}
        >
          Join the waitlist
        </Button>
      </Group>
    </Container>
  );
}
