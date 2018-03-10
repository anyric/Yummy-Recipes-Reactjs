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
          <Route exact path="/dashboard/welcome" component={Dashboard} />
          <Route exact path="/dashboard/profile" component={Dashboard} />
          <Route exact path="/dashboard/reset" component={Dashboard} />
          <Route exact path="/dashboard/delete" component={Dashboard} />
          <Route exact path="/dashboard/addnewcat" component={Dashboard} />
          <Route exact path="/dashboard/categoryreport" component={Dashboard} />
          <Route exact path="/dashboard/addnewrecipe" component={Dashboard} />
          <Route exact path="/dashboard/recipereport" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}
