import React, { Component } from 'react';

export class EditCategory extends Component {
  render() {
    return (
      <div className="container">
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog modal-md">

            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>This is a large modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
