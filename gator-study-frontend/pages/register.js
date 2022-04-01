import { useState, useEffect,useContext } from "react";
import Router from "next/router";
import {Context} from "../context";
import {useRouter} from 'next/router';
import axios from 'axios';
import Link from 'next/link'
import { Container,Heading,Button, FormLabel, FormControl,Input } from "@chakra-ui/react";
import Layout from "../layouts/Layouts";
// import Layout from "../component/Layout";
// import { login } from "../requests/userApi";
// import useUser from "../data/useUser";

const Register = () => {
  const {name,email, secret, setName,setEmail,setSecret} = useContext(Context);
  const router = useRouter();


  const onRegisterSubmit = async(e) => {
    e.preventDefault();
    if (email && secret) {
    //   login({ email, password });
    console.log(name,email,secret);
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        secret
      })
    })
    await router.push('/login');
    }
  };

  return (
    <Layout>
      <Container centerContent>
        <Heading > Register </Heading>
        <form onSubmit={onRegisterSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
          <Input
              data-cy="name"
              type="name"
              id="name"
              aria-describedby="nameHelp"
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
              data-cy="email"
              type="email"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
          <Input
              data-cy="password"
              onChange={(e) => setSecret(e.target.value)}
              type="password"
              id="password"
            />
        <Button type="submit" >
            Submit
          </Button>

        </form>
        </Container>
    </Layout>
  );
};

export default Register;