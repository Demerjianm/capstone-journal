import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import NoMatch from './components/NoMatch';
import Journal from './components/Journal'
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <div>
    <NavBar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" render={ (props) => <Auth {...props} title="Register" /> } />
        <Route path="/login" render={ (props) => <Auth {...props} title="Login" /> } />
        <ProtectedRoute path="/journal" component={Journal} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </div>
);

export default App;
