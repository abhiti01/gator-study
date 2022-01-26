import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component }  from 'react';
import './components/timer/_variables.sass';
// import './components/timer/index.sass';
// import HomePage from './home-page';
import SignIn from './components/account/login-page';
import SignUp from './components/account/register-page';
import Dashboard from './components/intro-page';
import Timer from './components/timer/Timer'
export default function App() {
  return (
    <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        {/* <Route exact path="/timer" component={Timer} /> */}
        {/* <Route exact path="/logout" component={LogoutPage} /> */}
    </Router>
  );
}