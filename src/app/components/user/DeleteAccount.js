import React, { Component } from 'react';

import * as User from '../../controller/User';

import '../../static/css/style.css';

export class DeleteAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: JSON.parse(localStorage.getItem('profile')),
    };
  }
  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        <h3>User Account</h3>
        <hr />
        <div className="container">
          <h4 className="card-title">Mr. { this.state.profile.name }</h4>
          <p>Are you sure you want to delete account
            <strong> { this.state.profile.username } </strong>?
          </p>
          <a
            onClick={User.deleteUser.bind(this)}
            href="/"
            className="nav-link col-sm-4 text-center btn-danger"
          >
            <span className="glyphicon glyphicon-trash">    Yes Delete</span>
          </a>
        </div>
      </div>
    );
  }
}
