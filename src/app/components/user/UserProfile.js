import React, { Component } from 'react';

import axios from 'axios';

import '../../static/css/style.css';
import pic1 from '../../static/img/head.jpg';

const url = 'http://127.0.0.1:5000/recipe/api/v1.0/';
axios.defaults.headers = { 'Content-Type': 'application/json' };

export class UserProfile extends Component {
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
        <h3>User Profile</h3>
        <hr />
        <div className="card profile-card">
          <div className="card-body">
            <img className="img-thumbnail profile" src={pic1} alt="head" />
            <h4 className="card-title text-dark">
              <strong>Mr. { this.state.user.name }</strong>
            </h4>
            <p className="card-text text-info">User id: { this.state.user.id }</p>
            <p className="card-text text-info">Email: { this.state.user.email }</p>
            <p className="card-text text-info">Username: { this.state.user.username }</p>
          </div>
        </div>
      </div>
    );
  }
}
