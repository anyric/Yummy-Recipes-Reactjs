/**
 * Module for application dashboard
 */
import React, { Component } from 'react';

import { Header } from './Header';

export class Dashboard extends Component {
/** Dashboard class handles one page entry into the application */

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-1">
            {this.props.children}
          </div>
        </div>

      </div>
    );
  }
}
