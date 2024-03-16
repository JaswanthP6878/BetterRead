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

function RegisterForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('firstname:',firstName);
    console.log('lastname:', lastName);
  };

  return (
    <Box maxW="400px" mx="auto" mt="8">
      <Heading textAlign="center" mb="8">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="firstname" mb="4">
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter Your first name"
          />
        </FormControl>
        <FormControl id="lastname" mb="4">
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </FormControl>
        <FormControl id="username" mb="4">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
          />
        </FormControl>
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
          Register
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm