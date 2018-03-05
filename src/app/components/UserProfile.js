import React, { Component } from 'react';

// import * as Utility from '../utils/Utility';

import '../static/css/style.css';

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
        <div className="container">
          <h4 className="card-title">Mr. {this.state.profile.name}</h4>
          <p>User id: {this.state.profile.id}</p>
          <p>Email: {this.state.profile.email}</p>
          <p>Username: {this.state.profile.username}</p>
        </div>

      </div>
    );
  }
}
