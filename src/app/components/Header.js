import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import '../static/css/w3.css';
import { UserProfile } from './UserProfile';
import { ResetPassword } from './ResetPassword';
import { AddCategory } from './AddCategory';
import { CategoryReport } from './CategoryReport';
import { AddRecipe } from './AddRecipe';
import { RecipeReport } from './RecipeReport';
import { DashboardWelcome } from './DashboardWelcome';
import { DeleteAccount } from './DeleteAccount';
import { Footer } from './Footer';
import * as Utility from '../utils/Utility';

export class Header extends Component {
  render() {
    const user = localStorage.getItem('user');
    if (!localStorage.isauth) {
      window.location.href = '/login';
    }
    Utility.getUser();
    Utility.getCategory(null);
    Utility.getRecipe(null);
    return (
      <BrowserRouter>
        <div className="m-0">
          <div className="row mb-5">
            <div className="bg-info w3-bar m-0 pb-2">
              <span className="name p-5"> Yummy Recipes</span>
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
                            onClick={Utility.logoutUser.bind(this)}
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
                  <a
                    className="glyphicon glyphicon-menu-hamburger text-white nav-link btn bg-info"
                    href="#/"
                  >
                    <strong> Overview</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white bg-dark"
                    data-toggle="collapse"
                    href="#user"
                  >User
                  </a>
                  <div id="user" className="panel-collapse">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <NavLink
                          className="nav-link text-info"
                          onClick={Utility.getUser.bind(this)}
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
                  <a
                    className="nav-link text-white bg-dark"
                    data-toggle="collapse"
                    href="#cat"
                  >Category
                  </a>
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
                          onClick={Utility.getCategory.bind(this)}
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
                  <a
                    className="nav-link text-white bg-dark"
                    data-toggle="collapse"
                    href="#recipe"
                  >Recipe
                  </a>
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
                          onClick={Utility.getRecipe.bind(this)}
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
