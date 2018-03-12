import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../static/img/logo.jpg';
import * as User from '../../controller/User';
import '../../static/css/style.css';
import { Footer } from '../commons/Footer';

export class Signup extends Component {
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
                  <NavLink className="nav-link" to="/login">
                    <span className="glyphicon glyphicon-log-in"> Login</span>
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
                    <h1 className="mt-4 text-white lead text-center">
                        Create Your Account
                    </h1>
                    <p className=" text-center text-white">
                      Sign up to get started with Yummy Recipes
                    </p>
                    <div className="mt-4">
                      <form onSubmit={User.registerUser.bind(this)}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fullname"
                            placeholder="Enter fullname"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter email address"
                          />
                        </div>
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
                          <i className="glyphicon glyphicon-plus mr-3"></i>
                          Create Account
                        </button>
                      </form>
                      <div className="clearfix"></div>
                      <p className="content-divider center mt-4"><span>or</span></p>
                    </div>
                    <p className="text-center text-white">
                      Have an account already? <NavLink to="/login">Sign In </NavLink>
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
