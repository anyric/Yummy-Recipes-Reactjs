/**
 * Module for the home page of the application
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import { Footer } from './Footer';

import pic1 from '../../static/img/orange.jpg';
import pic2 from '../../static/img/board_hd.jpg';
import pic4 from '../../static/img/tomatoes.jpg';
import pic6 from '../../static/img/login.jpg';
import pic7 from '../../static/img/addrecipe.jpg';
import pic8 from '../../static/img/catreport.jpg';
import '../../static/css/style.css';

export class Home extends Component {
/** Home class handles the home page */

  render() {
    return (
      <div>
        <header className="w3-bar">
          <Notifications />
          <div id="top"></div>
          <div id="pic" className="carousel slide p-0" data-ride="carousel">
            <div className="carousel-caption caption-button">
              <NavLink to="/signup">
                <button className="button btn-primary mx-5 mb-5">
                  <span className="glyphicon glyphicon-user"></span>{' '} Sign Up here!
                </button>
              </NavLink>
              <NavLink to="/login">
                <button className="button btn-primary mx-5 mb-5" >
                  <span className="glyphicon glyphicon-log-in"></span> {' '} Login here!
                </button>
              </NavLink>
              <a className="text-white text-left mr-5" href="#screenshot">
                <span className="glyphicon glyphicon-chevron-down active"></span>
              </a>
            </div>
            <ol className="carousel-indicators pt-0 mt-0">
              <li data-target="#pic" data-slide-to="0" className="active"></li>
              <li data-target="#pic" data-slide-to="1"></li>
              <li data-target="#pic" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img src={pic1} alt="Break Fast Menu" />
                <div className="carousel-caption caption-center">
                  <h1 className="text-info home-font">Break Fast!</h1>
                  <h3 className="text-primary caption-font">
                    Start your day off with a delicious break fast menu.
                  </h3>
                </div>
              </div>
              <div className="item">
                <img src={pic2} alt="Lunch Menu" />
                <div className="carousel-caption caption-center">
                  <h1 className="text-info home-font">Lunch!</h1>
                  <h3 className="text-primary caption-font">
                    Planning for your Lunch?, it just got better with
                    this higly Proteinous shiny fish.
                  </h3>
                </div>
              </div>
              <div className="item">
                <img src={pic4} alt="Supper Menu" />
                <div className="carousel-caption caption-center">
                  <h1 className="text-info home-font">Supper!</h1>
                  <h3 className="text-white caption-font">
                    Still filling full after a heavy lunch, worry no more! just grab
                    some tasty chips and a vegetable burgar for a wonderful night long
                    comfortable sleep.
                  </h3>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#pic" data-slide="prev">
              <span className="carousel-control-prev-icon active"></span>
            </a>
            <a className="carousel-control-next" href="#pic" data-slide="next">
              <span className="carousel-control-next-icon active"></span>
            </a>
          </div>
        </header>
        <div className="my-0">
          <div className="w3-bar home-bd pt-0 pb-0 mt-0 mb-0">
            <div className="col-lg12 mr-0 ml-0 mt-0 bg-dark text-center">
              <h1 className="text-light home-font pt-4 pb-0 my-0"> Why Yummy recipes?</h1>
              <p className="text-light pt-2 pb-2 mt-0 mb-0 mr-5 ml-5">
                The application allows users to
                keep track of their owesome food recipes. <br />
                It helps individuals who love to cook and eat good food to
                remember recipes and also share with others.
              </p>
              <div className="row mr-0 ml-0 bg-dark text-center">
                <div className="col-md-6">
                  <span>
                    <p className="text-light pt-4 pb-0 my-5">Are you mindful of your
                      <br /> health and diet? Just signup!
                    </p>
                  </span>
                </div>
                <div className="col-md-6">
                  <span>
                    <p className="text-light pt-4 pb-0 my-5">Do you have an account
                      <br /> already? Please login!
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div id="screenshot" className="row home-bg">
              <div>
                <div className="col-md-4 text-center mt-5">
                  <img className="feature" src={pic6} alt="Login" />
                  <div className="text-center"><h2 className="text-dark home-font">User</h2></div>
                  <p className="text-justify home-bd mx-5 mb-5">
                  Signup for an account, login and start tracking those awesome foods you like
                  eating most and to remember sharing with your loved onces.
                  </p>
                </div>
                <div className="col-md-4 text-center mt-5">
                  <img className="feature" src={pic8} alt="Chicago" width="200" height="200" />
                  <div className="text-center"><h2 className="text-dark home-font">Category</h2>
                  </div>
                  <p className="text-justify home-bd mx-5 mb-5">
                  You no longer have to manually sort your recipes. Create a category like beef
                  stews and save all your beef stews recipes in one place.
                  </p>
                </div>
                <div className="col-md-4 text-center mt-5">
                  <img className="feature" src={pic7} alt="Chicago" width="200" height="200" />
                  <div className="text-center">
                    <h2 className="text-dark home-font">Create Recipes</h2>
                  </div>
                  <p className="text-justify home-bd mx-5 mb-5">
                  Have all your recipes in one place. Now you don't have to worry about that
                  old family recipe ever getting lost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
