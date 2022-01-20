import { BrowserRouter as Router, Route } from 'react-router-dom';
// import HomePage from './home-page';
import SignIn from './components/login-page';
import SignUp from './components/register-page';
import Dashboard from './components/intro-page';
export default function App() {
  return (
    <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        {/* <Route exact path="/logout" component={LogoutPage} /> */}
    </Router>
  );
}