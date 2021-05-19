import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import Quote from './Quote';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} exact />
        <Route path="/quote" component={Quote} exact />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
