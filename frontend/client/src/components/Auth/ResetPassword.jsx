import React from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ResetPassword() {
    const [password, setPassword] = useState('');

    const params = useParams();
    console.log(params.token);
  return (
    <>
     <Container py={'16'} h="90vh">
      <form >
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Button
            // isLoading={loading}
            type="submit"
            w={'full'}
            colorScheme="yellow"
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
    </>
  )
}

export default ResetPassword