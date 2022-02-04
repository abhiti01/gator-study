import { useState, useEffect,useContext } from "react";
import Router from "next/router";
import {Context} from "../context";
import {useRouter} from 'next/router';
import axios from 'axios';
import Link from 'next/link'
import { Container,Heading,Button, FormLabel, FormControl,Input } from "@chakra-ui/react";
// import Layout from "../component/Layout";
// import { login } from "../requests/userApi";
// import useUser from "../data/useUser";

const Login = () => {
  const {email, secret, setEmail,setSecret} = useContext(Context);
  const router = useRouter();

  const onLoginSubmit = async(e) => {
    e.preventDefault();
    if (email && secret) {
    //   login({ email, password });
    console.log(email,secret);
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        secret
      })
    })
    const data = await response.json()
    router.push('/');
    }
  };

  return (
      <Container centerContent>
        <Heading > Login </Heading>
        <form onSubmit={onLoginSubmit}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              onChange={(e) => setSecret(e.target.value)}
              type="password"
              id="password"
            />
        <Button type="submit" >
            Submit
          </Button>

        </form>
        </Container>
  );
};

export default Login;