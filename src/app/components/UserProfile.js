import React, { Component } from 'react';

import '../static/css/style.css';
import pic1 from '../static/img/head.jpg';

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: JSON.parse(localStorage.getItem('profile')),
    };
  }
  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        <h3>User Profile</h3>
        <hr />
        <div className="card" style={{ width: 600 }}>
          <div className="card-body">
            <img className="img-thumbnail profile" src={pic1} alt="head" />
            <h4 className="card-title text-dark">
              <strong>Mr. {this.state.profile.name}</strong>
            </h4>
            <p className="card-text text-info">User id: {this.state.profile.id}</p>
            <p className="card-text text-info">Email: {this.state.profile.email}</p>
            <p className="card-text text-info">Username: {this.state.profile.username}</p>
          </div>
        </div>
      </div>
    );
  }
}
