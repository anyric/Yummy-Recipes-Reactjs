/**
 * Module for adding new recipe category
 */
import React, { Component } from 'react';

import * as Category from '../../controller/Category';

export class AddCategory extends Component {
  /** AddCategory class to display form and handle user input */

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="container-fluid dborder mt-5 col-sm-8 offset-sm-2 col-md-8 offset-md-1 pt-3">
        <h2>Add Category</h2>
        <hr />
        <form onSubmit={Category.addCategory.bind(this)} >
          <div className="container">
            <div className="col-xs-7">
              <p>Please fill in this form to add a new Category.</p>
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="catname"
                placeholder="Enter Name"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                row="5"
                id="description"
                name="catdesc"
                placeholder="Enter Description"
                onChange={this.handleInputChange.bind(this)}
              >
              </textarea>
            </div>
            <div className="col-xs-10">
              <button type="submit" className="btn btn-primary btn-md">
                <span className="glyphicon glyphicon-floppy-save">    Save     </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
