import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './app/components/home/Home';
import { Signup } from './app/components/user/Signup';
import { Login } from './app/components/user/Login';
import { Dashboard } from './app/components/home/Dashboard';

class App extends Component {
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
render(<App />, document.getElementById('root'));
