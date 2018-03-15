/**
 * Module for resetting user password
 */
import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import { axiosInstance } from '../../controller/AxiosInstance';

export class ResetPassword extends Component {
  /** ResetPassword class to display form and handle user password reset */

  handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const data = { email: email, password: password };
    if (email !== '' && password !== '') {
      axiosInstance.put('user/reset', data)
        .then(function (response) {
          notify.show(response.data.message, 'success', 4000);
        })
        .catch(function (error) {
          if (error.response) {
            notify.show(error.response.data.message, 'error', 4000);
          }
        });
    } else {
      notify.show('Please fill in all fields', 'error', 4000);
    }
    event.target.elements.email.value = '';
    event.target.elements.password.value = '';
  }

  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="col-xs-7">
              <h2>Reset Password</h2>
              <hr />
              <p>Please fill in form details below to reset your password!</p>
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                name="password"
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
