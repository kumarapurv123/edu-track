import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link } from 'react-router-dom';

  export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'gray.900',
  };
  

  const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
  };

function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');
    const [continent, setContinent] = useState('');

    const changeImageHandler = (e ) => {
        const file = e.target.files[0];
        const reader = new FileReader();
       
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
    }
  return (
    <>
    <Container h={'140vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading textTransform={'uppercase'} children={'Registration'} />

        <form  style={{ width: '100%' }}>
          <Box my="4" display={'flex'} justifyContent="center">
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Continent" />
            <Input
              required
              id="continent"
              value={continent}
              onChange={e => setContinent(e.target.value)}
              placeholder="Enter Your Continent"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
         

          <Button my="4" colorScheme={'yellow'} type="submit">
            Sign Up
          </Button>

          <Box my="4">
            Already Signed Up?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant="link">
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
    </>
  )
}

export default Register