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
          <Route exact path="/resetpassword" component={Dashboard} />
          <Route exact path="/deleteaccount" component={Dashboard} />
          <Route exact path="/addnewcategory" component={Dashboard} />
          <Route exact path="/categoryreport" component={Dashboard} />
          <Route exact path="/addnewrecipe" component={Dashboard} />
          <Route exact path="/recipereport" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}
