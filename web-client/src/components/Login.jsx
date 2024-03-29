import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Link,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g., send login credentials to server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box maxW="400px" mx="auto" mt="8">
      <Heading textAlign="center" mb="8">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">
          Sign In
        </Button>
      </form>
      <p>New user? <ChakraLink as={ReactRouterLink} to='/register'>Create Account</ChakraLink></p>
    </Box>
  );
}

export default Login