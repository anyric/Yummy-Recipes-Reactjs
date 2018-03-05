import React, { Component } from 'react';

import * as Utility from '../utils/Utility';

const url = 'http://127.0.0.1:5000/recipe/api/v1.0/allcategory/';

export class AddRecipe extends Component {
  constructor(props) {
    super(props);
    Utility.getCategory(url);
    this.state = {
      categorylist: JSON.parse(localStorage.getItem('allcategory')),
    };
  }

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
        <h2>Add Recipe</h2>
        <hr />
        <form onSubmit={Utility.addRecipe.bind(this)}>
          <div className="container">
            <div className="col-xs-7">
              <p>Please fill in this form to add a new Recipe.</p>
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="sel1">Select Category:</label>
              <select
                className="form-control"
                name="catid"
                onChange={this.handleInputChange.bind(this)}
              >
                {this.state.categorylist ? this.state.categorylist.map((category, index) =>
                  <option value={category.id} key={index}>{category.name}</option>) :
                <option>No Category</option>
                }
              </select>
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="recname"
                placeholder="Enter Name"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
            <div className="form-group col-xs-7">
              <label htmlFor="ingredient">Ingredients:</label>
              <textarea
                className="form-control"
                row="5"
                id="ingredient"
                name="recdesc"
                placeholder="Enter Ingredients"
                onChange={this.handleInputChange.bind(this)}
              >
              </textarea>
            </div>
            <div className="col-xs-10">
              <button type="submit" className="btn btn-primary btn-md">
                <span className="glyphicon glyphicon-floppy-save">    Save          </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
