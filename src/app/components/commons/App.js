import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Signup } from '../user/Signup';
import { Login } from '../user/Login';
import { Dashboard } from './/Dashboard';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route exact path="/welcome" component={Dashboard} />
          <Route exact path="/profile" component={Dashboard} />
          <Route exact path="/reset-password" component={Dashboard} />
          <Route exact path="/delete-account" component={Dashboard} />
          <Route exact path="/add-new-category" component={Dashboard} />
          <Route exact path="/category-report" component={Dashboard} />
          <Route exact path="/add-new-recipe" component={Dashboard} />
          <Route exact path="/recipe-report" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}
