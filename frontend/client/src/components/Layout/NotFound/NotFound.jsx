import React from 'react'
import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <>
     <Container h="90vh">
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading>Page Not Found</Heading>
        <Link to="/">
          <Button variant={'ghost'}>Go to home</Button>
        </Link>
      </VStack>
    </Container>
    
    </>
  )
}

export default NotFound