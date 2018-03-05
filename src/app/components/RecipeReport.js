import React, { Component } from 'react';

import * as Utility from '../utils/Utility';

export class RecipeReport extends Component {
  constructor(props) {
    super(props);
    const queryresults = JSON.parse(localStorage.getItem('paginate'));
    // console.log(queryresults.next);
    this.state = {
      recipelist: JSON.parse(localStorage.getItem('recipes')),
      search: '',
      items: queryresults.items,
      currentPage: queryresults.page,
      pages: queryresults.pages,
      nextPage: queryresults.next,
      previousPage: queryresults.previous };
  }
  handleSearchInput(event) {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  }
  handleRemoveRecipe(index, id) {
    if (id > 0) {
      Utility.deleteRecipe(id);
    }
    this.setState({
      recipelist: this.state.recipelist.filter(function (e, i) {
        return i !== index;
      }),
    });
  }
  handleAlert() {
    alert(this.state.search);
    this.setState({
      search: '',
    });
  }
  handlePageChange(event, page) {
    event.preventDefault();
    Utility.getRecipe(page);
  }
  render() {
    const message = JSON.parse(localStorage.getItem('recipemessage'));
    const filteredrecipelist = this.state.recipelist ? (this.state.recipelist.filter(
      (recipe) => {
        return recipe.name.indexOf(this.state.search.toLowerCase()) !== -1;
      })) : this.state.recipelist;
    const pageListElements = [];
    if (this.state.pages) {
      for (let i = 1; i <= this.state.pages; i++) {
        pageListElements.push(
          <li key={i} className={this.state.currentPage === i ? 'active' : ''}>
            <a
              onSelect={this.handlePageChange.bind(this, i)}
              href={this.state.currentPage ? '/dashboard/recipereport' : '#'}
            >{i }
            </a>
          </li>,
        );
      }
    }
    return (
      <div className="container-fluid dborder mt-5 col-sm-8 offset-sm-2 col-md-8 offset-md-1 pt-3">
        {this.state.recipelist ?
          <div>
            <h2>Recipes List</h2>
            <hr />
            <div>
              <form>
                <div className="input-group col-md-8">
                  <input
                    type="text"
                    className="col-sm-12 py-2"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleSearchInput.bind(this)}
                    placeholder="recipe name"
                  />
                  <div
                    className="input-group-addon"
                    role="button"
                    onClick={this.handleAlert.bind(this)}
                    tabIndex={0}
                  >
                    <span className="glyphicon glyphicon-search"></span>
                  </div>
                </div>
              </form>
            </div>
            <br /><br />
            {filteredrecipelist ?
              <p>Click on a recipe item for more details.</p> : 'No Recipe with that name!' }
            <ul className="list-group">
              {filteredrecipelist.map((recipe, index) =>
                <li className="list-group-item" key={index}>
                  <small>
                    <span
                      className=" label label-info"
                      style={{ marginRight: 5 }}
                    >
                      {recipe.id}
                    </span>
                  </small>
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
                      className="glyphicon glyphicon-trash pull-right"
                      data-toggle="modal"
                      style={{ marginRight: 10 }}
                    >
                    </span>
                  </a>
                  <a
                    href="#edit"
                    className="text-primary"
                    data-target={`#edit${recipe.id}`}
                    data-toggle="modal"
                    data-backdrop="false"
                  >
                    <span
                      className="glyphicon glyphicon-pencil pull-right"
                      style={{ marginRight: 10 }}
                    >
                    </span>
                  </a>
                  <div id={`rec${recipe.id}`} className="panel-collapse collapse">
                    <br />
                    <p><strong>Category Id:</strong> {recipe.category_id}</p>
                    <p><strong>Recipe Id:</strong> {recipe.id}</p>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Date Modified:</strong> {recipe.date_modified}</p>
                  </div>
                  <div
                    id={`edit${recipe.id}`}
                    className="modal fade"
                    tabIndex="-1"
                    role="dialog"
                  >
                    <div className="modal-dialog" role="document">
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
                          onSubmit={Utility.updateRecipe.bind(this)}
                        >
                          <div className="modal-body">
                            <p>Please edit values in fields below and save changes!</p>
                            <input
                              type="hidden"
                              className="form-control"
                              name="recid"
                              defaultValue={recipe.id}
                            />
                            <label htmlFor="recname">Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              name="reciname"
                              defaultValue={recipe.name}
                            />
                            <label htmlFor="recingre">Ingredients:</label>
                            <textarea
                              className="form-control"
                              row="5"
                              name="recing"
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
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                              <span className="glyphicon glyphicon-remove">    Close     </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>)}
              {this.state.items ?
                <nav aria-label="Page navigation">
                  <h4>Total Recipes:
                    <span className="badge">{this.state.items ? this.state.items : 0}</span>
                  </h4>
                  <ul className="pagination">
                    <li
                      className={this.state.currentPage === 1 ? 'disabled' : ''}
                    >
                      <a
                        onSelect={Utility.getRecipe(this.state.currentPage - 1)}
                        href={this.state.previousPage ? '/dashboard/recipereport' : '#'}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    {pageListElements}
                    <li
                      className={this.state.currentPage === this.state.pages ? 'disabled' : ''}
                    >
                      <a
                        onSelect={Utility.getRecipe((this.state.currentPage + 1) > this.state.pages
                        ? this.state.pages : this.state.currentPage + 1)}
                        href={this.state.nextPage ? '/dashboard/recipereport' : '#'}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav> : ''}
            </ul>
          </div> : <p className="text-center">{message}</p>}
      </div>
    );
  }
}
