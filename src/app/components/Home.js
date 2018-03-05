import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import pic1 from '../static/img/orange.jpg';
import pic2 from '../static/img/board_hd.jpg';
import pic4 from '../static/img/tomatoes.jpg';
import pic5 from '../static/img/fruit.jpg';
import '../static/css/style.css';
import { Footer } from './Footer';


export class Home extends Component {
  render() {
    return (
      <div>
        <header className="w3-bar">
          <div id="pic" className="carousel slide p-0" data-ride="carousel">
            <ol className="carousel-indicators pt-0 mt-0">
              <li data-target="#pic" data-slide-to="0" className="active"></li>
              <li data-target="#pic" data-slide-to="1"></li>
              <li data-target="#pic" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img src={pic1} alt="Break Fast Menu" />
                <div className="carousel-caption">
                  <h1 className="text-info">Break Fast!</h1>
                  <h3 className="text-primary">
                    Start your day off with a delicious break fast menu.
                  </h3>
                </div>
              </div>
              <div className="item">
                <img src={pic2} alt="Lunch Menu" />
                <div className="carousel-caption">
                  <h1 className="text-info">Lunch!</h1>
                  <h3 className="text-primary">
                    Planning for your Lunch?, it just got better with
                    this higly Proteinous shiny fish.
                  </h3>
                </div>
              </div>
              <div className="item">
                <img src={pic4} alt="Supper Menu" />
                <div className="carousel-caption">
                  <h1 className="text-dark">Supper!</h1>
                  <h3 className="text-info">
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

          <div className="w3-bar pt-0 pb-0 mt-0 mb-0">
            <div className="col-lg12 mr-0 ml-0 mt-0 bg-dark text-center">
              <h1 className="text-light pt-4 pb-0 my-0"> Why Yummy recipes?</h1>
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
                      <br /> health and diet? Just
                    </p>
                    <NavLink to="/signup">
                      <button className="button btn-primary mx-5 mb-5">
                        <span className="glyphicon glyphicon-user"></span>{' '} Sign Up here!
                      </button>
                    </NavLink>
                  </span>
                </div>
                <div className="col-md-6">
                  <span>
                    <p className="text-light pt-4 pb-0 my-5">Do you have an account
                      <br /> already? Please
                    </p>
                    <NavLink to="/login">
                      <button className="button btn-primary mx-5 mb-5" >
                        <span className="glyphicon glyphicon-log-in"></span> {' '} Login here!
                      </button>
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
            <img className="container" src={pic5} alt="Chicago" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
