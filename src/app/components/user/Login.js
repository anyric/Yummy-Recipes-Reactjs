/**
 * Module for user login
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../static/img/logo.jpg';
import pic1 from '../../static/img/head.jpg';
import '../../static/css/style.css';
import { Footer } from '../commons/Footer';
import * as User from '../../controller/User';

export class Login extends Component {
  /** Login class to display login form and handle user authetication */

  render() {
    return (
      <div>
        <div className="header-bg w3-bar m-0 pb-2">
          <span className="name p-5">
            <img className="img-thumbnail logo mr-3 ml-2 bg-warning" src={logo} alt="logo" />
            Yummy Recipes
          </span>
        </div>
        <nav className="w3-bar navbar-expand-lg navbar-dark bg-dark ">
          <div className="w3-bar m-0 text-center">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    <span className="glyphicon glyphicon-home"> Home</span>
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav navbar-right ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/signup">
                    <span className="glyphicon glyphicon-user"> SignUp</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="container fmargin">
            <div className="row">
              <div className="col-md-6 col-sm-8 mx-auto">
                <div className="card border-none lmargin">
                  <div className="card-body">
                    <div className="mt-2">
                      <img
                        src={pic1}
                        alt="head"
                        className="brand-logo mx-auto d-block img-fluid rounded-circle"
                      />
                    </div>
                    <p className="mt-4 text-white lead text-center">
                        Login to access your account
                    </p>
                    <div className="mt-4">
                      <form onSubmit={User.loginUser.bind(this)}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                          />
                        </div>
                        <button type="submit" className="btn btn-danger col-sm-5">
                          <i className="glyphicon glyphicon-log-in mr-3"></i>
                          Login
                        </button>
                      </form>
                      <div className="clearfix"></div>
                      <p className="content-divider center mt-4"><span>or</span></p>
                    </div>
                    <p className="text-center text-white">
                      Don't have an account yet? <NavLink to="/signup">Sign Up Now </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
