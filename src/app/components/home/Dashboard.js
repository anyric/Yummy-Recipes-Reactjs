import React, { Component } from 'react';

import { Header } from './Header';

export class Dashboard extends Component {
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
