/**
 * Module for welcome dashboard message
 */
import React, { Component } from 'react';

import '../../static/css/style.css';

export class DashboardWelcome extends Component {
/** DashboardWelcome class handles display of welcome message  */

  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        <h3 className="text-center col-sm-8 text-primary pt-5 pl-5 ml-5">
          Yummy Recipes Dashboard
        </h3>
        <div className="container text-center col-sm-8 pt-5 text-info pl-5 ml-5">
          <p>Welcome! to the dashboard for your owesome yummy recipes.</p>
          <p>To get started, select an item from the overview list.</p>
        </div>

      </div>
    );
  }
}
