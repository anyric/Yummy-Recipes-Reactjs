/**
 * Module for generating and viewing recipe list of a user
 */
import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { notify } from 'react-notify-toast';
import { axiosInstance } from '../../controller/AxiosInstance';
import * as Recipes from '../../controller/Recipes';

export class RecipeReport extends Component {
  /** RecipeReport class to handle report generation and display */

  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      recipeList: [],
      search: '',
      totalItems: 1,
      currentPageNumber: 1,
      totalPages: 1,
      message: '',
    };
  }

  getCategory() {
    const self = this;
    axiosInstance.get('allcategory/')
      .then(function (response) {
        self.setState({ categoryList: response.data });
      })
      .catch(function (error) {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  }

  getRecipes(pageNumber, categoryId) {
    if (categoryId !== null) {
      const self = this;
      let pageURL = '';

      if (parseInt(categoryId, 10) > 0) {
        pageURL = `category/recipes/${categoryId}`;
      } else {
        if (pageNumber > 0) {
          pageURL = `category/recipes/?page=${pageNumber}`;
        } else {
          pageURL = 'category/recipes/';
        }
      }

      axiosInstance.get(pageURL)
        .then(function (response) {
          if (response) {
            self.setState({
              recipeList: response.data.recipe.results,
              totalItems: response.data.recipe.items,
              currentPageNumber: 1,
              totalPages: response.data.recipe.pages,
            });
          }
        })
        .catch(function (error) {
          const data = { items: 0, page: 0, pages: 0, message: 'No recipes found!' };
          if (error) {
            self.setState({
              recipeList: [],
              totalItems: data.items,
              currentPageNumber: data.page,
              totalPages: data.pages,
              message: data.message,
            });
            notify.show(error.response.data.message, 'error', 4000);
          }
        });
    }
  }

  getRecipesByCategory(value) {
    const self = this;
    if (value > 0) {
      axiosInstance.get(`category/recipes/${value}`)
        .then(function (response) {
          if (response) {
            self.setState({
              recipeList: response.data,
              totalItems: response.data.length,
              currentPageNumber: 1,
              totalPages: Math.ceil(response.data.length / 5),
            });
          }
        })
        .catch(function (error) {
          const data = { items: 0, page: 0, pages: 0, message: 'No recipes found!' };
          if (error) {
            self.setState({
              recipeList: [],
              totalItems: data.items,
              currentPageNumber: data.page,
              totalPages: data.pages,
              message: data.message,
            });
            notify.show(error.response.data.message, 'error', 4000);
          }
        });
    } else {
      this.getRecipes(1, 0);
    }
  }

  searchRecipesByName(nameValue) {
    const self = this;
    if (typeof nameValue === 'string' && nameValue !== '') {
      axiosInstance.get(`category/recipes/?q=${nameValue}`)
        .then(function (response) {
          if (response) {
            self.setState({
              recipeList: response.data.recipe.results,
              totalItems: response.data.recipe.items,
              currentPageNumber: 1,
              totalPages: response.data.recipe.pages,
            });
          }
        })
        .catch(function (error) {
          const data = { items: 0, page: 0, pages: 0, message: 'No recipes found!' };
          if (error) {
            self.setState({
              recipeList: [],
              totalItems: data.items,
              currentPageNumber: data.page,
              totalPages: data.pages,
              message: data.message,
            });
            notify.show(error.response.data.message, 'error', 4000);
          }
        });
    } else {
      this.getRecipes(1, 0);
    }
  }

  componentDidMount() {
    this.getCategory();
    this.getRecipes(1, 0);
  }

  handleSearchInput(event) {
    const value = event.target.value;
    this.setState({ search: value });
    this.searchRecipesByName(value);
    if (value === '') {
      this.setState({ message: '' });
    }
  }

  handleRemoveRecipe(index, id) {
    if (id > 0) {
      Recipes.deleteRecipe(id);
    }
    this.getCategory();
    this.getRecipes(1, 0);
  }

  handleSearch() {
    this.setState({ search: '' });
  }

  handleRecipeUpdate() {
    this.setState({
      message: '',
    });
    this.handleSearch();
    this.getRecipes(1, 0);
  }

  handleCategorySelect(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      currentPageNumber: value,
    });
    this.getRecipesByCategory(value);
  }

  handlePageSelect(number) {
    this.setState({ currentPageNumber: number });
    this.getRecipes(number, this.state.categoryId);
  }

  render() {
    const items = [];
    if (this.state.totalPages) {
      items.push(
        <Pagination.First
          key={0}
          disabled={this.state.currentPageNumber === 1}
          onClick={this.handlePageSelect.bind(this, 1)}
        />,
        <Pagination.Prev
          key={1}
          disabled={this.state.currentPageNumber === 1}
          onClick={this.handlePageSelect.bind(this,
          (this.state.currentPageNumber - 1) > 1 ? this.state.currentPageNumber - 1 : 1)}
        />,
      );

      for (let i = 1; i <= this.state.totalPages; i++) {
        items.push(
          <Pagination.Item
            key={i + 1}
            active={i === this.state.currentPageNumber}
            onClick={this.handlePageSelect.bind(this, i)}
          >{i}
          </Pagination.Item>,
        );
      }
      items.push(
        <Pagination.Next
          key={items.length + 1}
          disabled={this.state.currentPageNumber === this.state.totalPages}
          onClick={this.handlePageSelect.bind(this,
          (this.state.currentPageNumber + 1) <= this.state.totalPages
          ? this.state.currentPageNumber + 1 : this.state.totalPages)}
        />,
        <Pagination.Last
          key={items.length + 2}
          disabled={this.state.currentPageNumber === this.state.totalPages}
          onClick={this.handlePageSelect.bind(this, this.state.totalPages)}
        />,
      );
    }

    return (
      <div className="container-fluid dborder mt-5 col-sm-8 offset-sm-2 col-md-8 offset-md-1 pt-3">
        <h2>Recipes List</h2>
        <div>
          <select
            className="form-control col-md-8 mb-3"
            name="categoryId"
            id="categoryId"
            onChange={this.handleCategorySelect.bind(this)}
          >
            <option value={0}>All Category</option>
            {this.state.categoryList.length > 0 ?
            this.state.categoryList.map((category, index) =>
              <option value={category.id} key={index}>{category.id} {category.name}</option>) :
            <option value="null">No Category</option>
            }
          </select>
        </div>
        <div>
          <form>
            <div className="input-group col-md-8">
              <input
                type="text"
                className="col-sm-12 py-2"
                name="search"
                id="search"
                value={this.state.search}
                onChange={this.handleSearchInput.bind(this)}
                placeholder="Recipe Name"
              />
              <div
                className="input-group-addon"
                role="button"
                onClick={this.handleSearch.bind(this)}
                tabIndex={0}
              >
                <span className="glyphicon glyphicon-search"></span>
              </div>
            </div>
          </form>
        </div>
        <hr />
        { this.state.recipeList.length < 1 ? this.state.message : ''}
        {this.state.recipeList.length > 0 ?
          <div>
            {this.state.recipeList ?
              <p>Click on a recipe item for more details.</p> : 'No Recipe with that name!' }
            <ul className="list-group">
              {this.state.recipeList.map((recipe, index) =>
                <li className="list-group-item" key={index}>
                  <a className="text-info" data-toggle="collapse" href={`#rec${recipe.id}`}>
                    {recipe.name}
                    <span className="caret"></span>
                  </a>
                  <a
                    href="#delete"
                    id={recipe.id}
                    className="text-danger"
                    onClick={this.handleRemoveRecipe.bind(this, index, recipe.id)}
                  >
                    <span
                      className="glyphicon glyphicon-trash pull-right report-detail"
                      data-toggle="modal"
                    >
                    </span>
                  </a>
                  <a
                    id="recipeedit"
                    href="#edit"
                    className="text-primary"
                    data-target={`#edit${recipe.id}`}
                    data-toggle="modal"
                    data-backdrop="false"
                  >
                    <span
                      className="glyphicon glyphicon-pencil pull-right report-detail"
                    >
                    </span>
                  </a>
                  <div id={`rec${recipe.id}`} className="panel-collapse collapse">
                    <br />
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                  </div>
                  <div
                    id={`edit${recipe.id}`}
                    className="modal fade"
                    tabIndex="-1"
                    role="dialog"
                  >
                    <div className="modal-dialog" key={recipe.id}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3 className="modal-title" id="editcate">Edit Recipe</h3>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form
                          className="form-hiorizontal"
                          onSubmit={Recipes.updateRecipe.bind(this)}
                        >
                          <div className="modal-body">
                            <p>Please edit values in fields below and save changes!</p>
                            <input
                              type="hidden"
                              className="form-control"
                              name="recipeId"
                              id="recipeId"
                              defaultValue={recipe.id}
                            />
                            <label htmlFor="recipeName">Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="recipeName"
                              id="recipeName"
                              defaultValue={recipe.name}
                            />
                            <label htmlFor="ingredients">Ingredients:</label>
                            <textarea
                              className="form-control"
                              row="5"
                              name="ingredients"
                              id="ingredients"
                              defaultValue={recipe.ingredients}
                            >
                            </textarea>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                              <span className="glyphicon glyphicon-floppy-save">
                                Update
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={this.handleRecipeUpdate.bind(this)}
                              data-dismiss="modal"
                            >
                              <span className="glyphicon glyphicon-remove">    Close     </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>)}
              {this.state.totalItems ?
                <nav aria-label="Page navigation">
                  <h4>Total:
                    <span className="badge">{this.state.totalItems ? this.state.totalItems : 0}
                    </span>
                  </h4>
                  <Pagination>
                    <Pagination bsSize="medium">{ items }</Pagination>
                  </Pagination>
                </nav> : ''}
            </ul>
          </div> :
          <p className="text-center"> <br /> <br /> <br /> <br />
            <button
              type="button"
              className="glyphicon glyphicon-backward btn btn-primary"
              onClick={this.handleRecipeUpdate.bind(this)}
            >  Back
            </button>
          </p>}
      </div>
    );
  }
}
