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


  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (email && secret) {
    //   login({ email, password });
    console.log(email,secret);
    //   mutate();
    }
  };

  return (
      <Container centerContent>
        <Heading > Login </Heading>
        <form onSubmit={onLoginSubmit}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              onChange={(e) => setSecret(e.target.value)}
              type="password"
              className="form-control"
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