/**
 * Module for adding new recipe
 */
import React, { Component } from 'react';
import { notify } from 'react-notify-toast';

import { axiosInstance } from '../../controller/AxiosInstance';
import * as Recipes from '../../controller/Recipes';

export class AddRecipe extends Component {
  /** AddRecipe class to display form and handle user input */

  constructor() {
    super();
    this.state = { categorylist: [] };
  }

  getCategory() {
    const self = this;
    axiosInstance.get('allcategory/')
      .then(function (response) {
        self.setState({ categorylist: response.data });
      })
      .catch(function (error) {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  }

  componentDidMount() {
    this.getCategory();
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
        <form onSubmit={Recipes.addRecipe.bind(this)}>
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
                {this.state.categorylist.length > 0 ?
                this.state.categorylist.map((category, index) =>
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
