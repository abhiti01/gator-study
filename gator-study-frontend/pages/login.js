import { useState, useEffect,useContext } from "react";
import Router from "next/router";
import {Context} from "../context";
import {useRouter} from 'next/router';
import axios from 'axios';
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
    // <Layout title="login">
      <div >
        <h2 > login </h2>

        <form onSubmit={onLoginSubmit}>
          <div >
            <label htmlFor="email">Email address</label>
            <input
              
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            
              onChange={(e) => setSecret(e.target.value)}
              type="password"
              className="form-control"
              id="password"
            />
          </div>

          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
    // </Layout>
  );
};

export default Login;