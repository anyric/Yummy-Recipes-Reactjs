import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="row">
        <footer className="py-4 w3-blue-grey bg-dark foot">
          <div className="container">
            <p className="m-0 text-center text-white small">&copy; {(new Date().getFullYear())}
              , All Rights Reserved!
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
