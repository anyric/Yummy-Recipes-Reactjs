/**
 * Module for generating and viewing category list of a user
 */
import React, { Component } from 'react';
import { notify } from 'react-notify-toast';

import { Pagination } from 'react-bootstrap';

import { axiosInstance } from '../../controller/AxiosInstance';
import * as Category from '../../controller/Category';

export class CategoryReport extends Component {
  /** CategoryReport class to handle report generation and display */

  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      search: '',
      totalItems: 1,
      currentPageNumber: 1,
      totalPages: 1,
      message: '',
    };
  }

  getCategory(pageNumber) {
    const self = this;
    let pageURL = '';
    if (typeof pageNumber === 'number' && pageNumber > 0) {
      pageURL = `category/?page=${pageNumber}`;
    } else {
      pageURL = 'category/';
    }
    axiosInstance.get(pageURL)
      .then(function (response) {
        self.setState({
          categoryList: response.data.category.results,
          totalItems: response.data.category.items,
          currentPageNumber: response.data.category.page,
          totalPages: Math.ceil(response.data.category.items / 5),
        });
      })
      .catch(function (error) {
        const data = { items: 0, page: 0, pages: 0 };
        self.setState({
          categoryList: [],
          totalItems: data.items,
          currentPageNumber: data.page,
          totalPages: data.pages,
          message: error.response.data.message,
        });
        notify.show(error.response.data.message, 'error', 4000);
      });
  }
  searchCategoryByName(nameValue) {
    const self = this;
    if (typeof nameValue === 'string' && nameValue !== '') {
      axiosInstance.get(`category/?q=${nameValue}`)
        .then(function (response) {
          self.setState({
            categoryList: response.data.category.results,
            totalItems: response.data.category.items,
            currentPageNumber: response.data.category.page,
            totalPages: response.data.category.pages,
          });
        })
        .catch(function (error) {
          const data = { items: 0, page: 0, pages: 0 };
          self.setState({
            categoryList: [],
            totalItems: data.items,
            currentPageNumber: data.page,
            totalPages: data.pages,
            message: error.response.data.message,
          });
          notify.show(error.response.data.message, 'error', 4000);
        });
    } else {
      this.getCategory(1);
    }
  }

  componentDidMount() {
    this.getCategory(1);
  }

  handleSearchInput(event) {
    const value = event.target.value;
    this.setState({ search: value });
    this.searchCategoryByName(value);
    if (value === '') {
      this.setState({ message: '' });
    }
  }

  handleRemoveCategory(index, id) {
    if (id > 0) {
      Category.deleteCategory(id);
    }
    this.getCategory(1);
  }

  handleSearch() {
    this.setState({ search: '' });
  }

  handleCategoryUpdate() {
    this.setState({
      message: '',
    });
    this.handleSearch();
    this.getCategory(1);
  }

  handlePageSelect(number) {
    this.setState({ currentPageNumber: number });
    this.getCategory(number);
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
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        <h2>Category List</h2>
        <div>
          <form>
            <div className="input-group col-md-8">
              <input
                type="text"
                id="search"
                name="search"
                className="col-sm-12 py-2"
                value={this.state.search}
                onChange={this.handleSearchInput.bind(this)}
                placeholder="category name"
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
        { this.state.categoryList.length < 1 ? this.state.message : ''}
        {this.state.categoryList.length > 0 ?
          <div>
            <p>Click on a category item for more details.</p>
            <div>
              <ul className="list-group">
                {this.state.categoryList.map((category, index) =>
                  <li className="list-group-item" key={index}>
                    <a className="text-info" data-toggle="collapse" href={`#cat${category.id}`}>
                      {category.name}
                      <span className="caret"></span>
                    </a>
                    <a
                      href="#delete"
                      id={category.id}
                      className="text-danger"
                      onClick={this.handleRemoveCategory.bind(this, index, category.id)}
                    >
                      <span
                        className="glyphicon glyphicon-trash pull-right report-detail"
                        data-toggle="modal"
                      >
                      </span>
                    </a>
                    <a
                      href="#edit"
                      className="text-primary"
                      data-target={`#edit${category.id}`}
                      data-toggle="modal"
                      data-backdrop="false"
                    >
                      <span
                        className="glyphicon glyphicon-pencil pull-right report-detail"
                      >
                      </span>
                    </a>
                    <div id={`cat${category.id}`} className="panel-collapse collapse">
                      <p>{category.description}</p>
                    </div>
                    <div
                      id={`edit${category.id}`}
                      className="modal fade dialog-top"
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" key={category.id}>
                        <div className="modal-content">
                          <div className="modal-header">
                            <h3 className="modal-title" id="editcate">Edit Category</h3>
                            {
                              this.state.message ?
                                <div
                                  className="alert alert-danger"
                                >
                                  {this.state.message}
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div> : ''
                            }
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
                            onSubmit={Category.updateCategory.bind(this)}
                          >
                            <div className="modal-body">
                              <p>Please edit values in fields below and save changes!</p>
                              <input
                                type="hidden"
                                className="form-control"
                                name="categoryId"
                                defaultValue={category.id}
                              />
                              <label htmlFor="categoryName">Name:</label>
                              <input
                                type="text"
                                className="form-control"
                                name="categoryName"
                                defaultValue={category.name}
                              />
                              <label htmlFor="description">Description:</label>
                              <textarea
                                className="form-control"
                                row="5"
                                name="description"
                                defaultValue={category.description}
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
                                onClick={this.handleCategoryUpdate.bind(this)}
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
                <nav aria-label="Page navigation">
                  <h4>Total:
                    <span className="badge">
                      { this.state.totalItems ? this.state.totalItems : 0}
                    </span>
                  </h4>
                  <Pagination>
                    <Pagination bsSize="medium">{ items }</Pagination>
                  </Pagination>
                </nav>
              </ul>
            </div>
          </div> :
          <p className="text-center">
            <button
              type="button"
              className="glyphicon glyphicon-backward btn btn-primary"
              onClick={this.handleCategoryUpdate.bind(this)}
            >  Back
            </button>
          </p>}
      </div>
    );
  }
}
