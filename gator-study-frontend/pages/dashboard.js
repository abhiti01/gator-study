import { useEffect } from "react";
import Router from "next/router";
import Layout from "../layouts/Layouts";
import Time from "./time";
import useUser from "../data/use-user";
import Playlist from "./playlist";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container,
} from '@chakra-ui/react'
import Chat from "./chat";

import { Switch } from '@chakra-ui/react'
import Groups from "./groups";

export default function Dashboard() {
  const { user, loggedOut } = useUser();

  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      Router.replace("/");
    }
  }, [loggedOut]);
  if (loggedOut) return "redirecting...";
  console.log(user.Name)
  if (!user) Router.replace('/login');
  return (
    <div>
      <Layout state="auth" />
          <>
            <h1>Welcome {user.Name}</h1>
            <p>This is your dashboard.</p>
            <button
              onClick={() => {
                logout();
                Router.replace("/");
              }}
            >
            <Playlist />
            </button>
          </>
    </div>
  );
}
