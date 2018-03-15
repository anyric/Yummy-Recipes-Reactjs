/**
 * Module for deleting user account
 */
import React, { Component } from 'react';
import { notify } from 'react-notify-toast';

import { axiosInstance } from '../../controller/AxiosInstance';
import * as User from '../../controller/User';
import '../../static/css/style.css';

export class DeleteAccount extends Component {
  /** DeleteAccount class to handle user account deletion */

  constructor() {
    super();
    this.getUser();
    this.state = { user: [] };
  }
  getUser() {
    const self = this;
    axiosInstance.get('user/view')
      .then(function (response) {
        self.setState({ user: response.data.User });
      })
      .catch(function (error) {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  }
  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        <h3>User Account</h3>
        <hr />
        <div className="container">
          <h4 className="card-title "><strong>{ this.state.user.name }</strong></h4>
          <p>Are you sure you want to delete account
            <strong> { this.state.user.username } </strong>?
          </p>
          <a
            onClick={User.deleteUser.bind(this)}
            href="/"
            className="nav-link col-sm-4 text-center btn-danger"
          >
            <span className="glyphicon glyphicon-trash">    Yes, Delete</span>
          </a>
        </div>
      </div>
    );
  }
}
