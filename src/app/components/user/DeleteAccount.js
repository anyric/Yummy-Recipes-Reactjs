import React, { Component } from 'react';

import axios from 'axios';

import * as User from '../../controller/User';

import '../../static/css/style.css';

const url = 'http://127.0.0.1:5000/recipe/api/v1.0/';
axios.defaults.headers = { 'Content-Type': 'application/json' };


export class DeleteAccount extends Component {
  constructor() {
    super();
    this.getUser();
    this.state = { user: [] };
  }
  getUser() {
    const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
    const self = this;
    axios.get(`${url}user/view`, config)
      .then(function (res) {
        self.setState({ user: res.data.User });
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  }
  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        <h3>User Account</h3>
        <hr />
        <div className="container">
          <h4 className="card-title">Mr. { this.state.user.name }</h4>
          <p>Are you sure you want to delete account
            <strong> { this.state.user.username } </strong>?
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
