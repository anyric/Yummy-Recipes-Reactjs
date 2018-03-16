/**
 * Module for resetting user password
 */
import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import { axiosInstance } from '../../controller/AxiosInstance';

export class ResetPassword extends Component {
  /** ResetPassword class to display form and handle user password reset */

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    if (this.state.email !== '' && this.state.password !== '') {
      const self = this;
      axiosInstance.put('user/reset', data)
        .then(function (response) {
          self.setState({ message: '' });
          notify.show(response.data.message, 'success', 4000);
        })
        .catch(function (error) {
          if (error.response) {
            notify.show(error.response.data.message, 'error', 4000);
          }
        });
    } else {
      this.setState({ message: 'Please fill in all fields' });
    }
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        {this.state.message ? <div className="alert alert-danger">{this.state.message}</div> : ''}
        <form name="resetForm" onSubmit={this.handleSubmit.bind(this)}>
          <div className="container">
            <div className="col-xs-7">
              <h2>Reset Password</h2>
              <hr />
              <p>Please fill in form details below to reset your password!</p>
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="email">Email:</label>
              <input
                ref="email"
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="password">Password:</label>
              <input
                ref="password"
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={event => this.setState({ password: event.target.value })}
                placeholder="Enter Password"
              />
            </div>
            <div className="col-xs-10">
              <button type="submit" className="btn btn-primary btn-md">
                <span className="glyphicon glyphicon-floppy-save">    Reset     </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
