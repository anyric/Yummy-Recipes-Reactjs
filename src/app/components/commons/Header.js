import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import { DashboardWelcome } from '../commons/DashboardWelcome';
import { UserProfile } from '../user/UserProfile';
import { ResetPassword } from '../user/ResetPassword';
import { DeleteAccount } from '../user/DeleteAccount';
import { AddCategory } from '../category/AddCategory';
import { CategoryReport } from '../category/CategoryReport';
import { AddRecipe } from '../recipes/AddRecipe';
import { RecipeReport } from '../recipes/RecipeReport';
import { Footer } from './Footer';
import * as User from '../../controller/User';
import '../../static/css/w3.css';
import '../../static/css/style.css';
import logo from '../../static/img/logo.jpg';

export class Header extends Component {
  render() {
    const user = localStorage.getItem('user');
    if (!localStorage.isauth) {
      window.location.assign('/login');
    }
    return (
      <BrowserRouter>
        <div className="m-0">
          <div className="row mb-5">
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
                      <NavLink className="nav-link" to="#/">
                        <span className="glyphicon"> Dashboard</span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="navbar-nav navbar-right ml-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        id="profile"
                        data-toggle="dropdown"
                        href="#/"
                      >
                        <span className="glyphicon glyphicon-user text-white"> {user}</span>
                      </a>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="profile">
                        <li className="nav-item">
                          <a
                            className="nav-link text-info"
                            onClick={User.logoutUser.bind(this)}
                            href="#/"
                          >
                            <span className="glyphicon glyphicon-log-out"> Logout</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="col-sm-2 col-md-2 hidden-xs-down ml-5 mt-5 bg-faded sidebar bg-info">
              <ul className="nav flex-column nav-stacked" role="presentation">
                <li className="nav-item">
                  <span className="text-white nav-link btn bg-info">
                    <strong> <h3 className="glyphicon glyphicon-menu-hamburger disabled" > Menu</h3>
                    </strong>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link text-white bg-dark">User</span>
                  <div id="user" className="panel-collapse">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <NavLink
                          className="nav-link text-info"
                          to="/dashboard/profile"
                        >
                          <span><i className="glyphicon glyphicon-user"></i> View profile</span>
                        </NavLink>
                      </li>
                      <li className="list-group-item">
                        <NavLink className="nav-link text-info" to="/dashboard/reset">
                          <span><i className="glyphicon glyphicon-pencil"></i> Change password
                          </span>
                        </NavLink>
                      </li>
                      <li className="list-group-item">
                        <NavLink className="nav-link text-info" to="/dashboard/delete">
                          <span>
                            <i className="glyphicon glyphicon-trash text-danger"></i> Delete Account
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <span className="nav-link text-white bg-dark">Category</span>
                  <div id="cat" className="panel-collapse">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <NavLink className="nav-link text-info" to="/dashboard/addnewcat">
                          <span><i className="glyphicon glyphicon-plus"></i> New Category </span>
                        </NavLink>
                      </li>
                      <li className="list-group-item">
                        <NavLink
                          className="nav-link text-info"
                          to="/dashboard/categoryreport"
                        >
                          <span> <i className="glyphicon glyphicon-folder-open"></i> View Reports
                          </span>
                        </NavLink>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <span className="nav-link text-white bg-dark">Recipe</span>
                  <div id="recipe" className="panel-collapse">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <NavLink className="nav-link text-info" to="/dashboard/addnewrecipe">
                          <span><i className="glyphicon glyphicon-plus"></i> New Recipe </span>
                        </NavLink>
                      </li>
                      <li className="list-group-item">
                        <NavLink
                          className="nav-link text-info"
                          to="/dashboard/recipereport"
                        >
                          <span><i className="glyphicon glyphicon-folder-open"></i> View Reports
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <Switch>
              <Route path="/dashboard/welcome" component={DashboardWelcome} />
              <Route path="/dashboard/profile" component={UserProfile} />
              <Route path="/dashboard/reset" component={ResetPassword} />
              <Route path="/dashboard/delete" component={DeleteAccount} />
              <Route path="/dashboard/addnewcat" component={AddCategory} />
              <Route path="/dashboard/categoryreport" component={CategoryReport} />
              <Route path="/dashboard/addnewrecipe" component={AddRecipe} />
              <Route path="/dashboard/recipereport" component={RecipeReport} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
