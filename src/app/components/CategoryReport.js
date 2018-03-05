import React, { Component } from 'react';

import * as Utility from '../utils/Utility';

export class CategoryReport extends Component {
  constructor(props) {
    super(props);
    const paginate = JSON.parse(localStorage.getItem('pagination'));
    this.state = {
      categorylist: JSON.parse(localStorage.getItem('category')),
      search: '',
      items: paginate.items,
      currentPage: paginate.page,
      pages: paginate.pages,
      nextPage: paginate.next,
      previousPage: paginate.previous,
    };
  }
  handleSearchInput(event) {
    const value = event.target.value;
    Utility.getCategory(event);
    this.setState({
      search: value,
    });
  }
  handleRemoveCategory(index, id) {
    if (id > 0) {
      Utility.deleteCategory(id);
    }
    const deletedCategory = this.state.categorylist.filter(function (e, i) {
      return i !== index;
    });
    this.setState({ categorylist: deletedCategory });
  }
  handleSearch() {
    this.setState({
      search: '',
    });
  }
  handlePageChange(event, page) {
    event.preventDefault();
    if (page > this.state.pages) {
      page = this.state.pages;
    }
    Utility.getCategory(page);
  }
  render() {
    const message = JSON.parse(localStorage.getItem('catmessage'));
    const filteredCategoryList = this.state.categorylist ? (this.state.categorylist.filter(
      (category) => {
        return category.name.indexOf(this.state.search.toLowerCase()) !== -1;
      })) : this.state.categorylist;
    const pageListElements = [];
    if (this.state.pages) {
      for (let i = 1; i <= this.state.pages; i++) {
        pageListElements.push(
          <li key={i} className={this.state.currentPage === i ? 'active' : ''}>
            <a
              onSelect={this.handlePageChange.bind(this, i)}
              href={this.state.currentPage ? '/dashboard/categoryreport' : '#'}
            >{i }
            </a>
          </li>,
        );
      }
    }
    return (
      <div className="container-fluid dborder mt-5 col-sm-9 offset-sm-3 col-md-8 offset-md-2 pt-3">
        {this.state.categorylist ?
          <div>
            <h2>Category List</h2>
            <hr />
            <div>
              <form>
                <div className="input-group col-md-8">
                  <input
                    type="text"
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
            <br /><br />
            <p>Click on a category item for more details.</p>
            <div>
              <ul className="list-group">
                {filteredCategoryList.map((category, index) =>
                  <li className="list-group-item" key={index}>
                    <small>
                      <span
                        className=" label label-info"
                        style={{ marginRight: 5 }}
                      >
                        {category.id}
                      </span>
                    </small>
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
                        className="glyphicon glyphicon-trash pull-right"
                        data-toggle="modal"
                        style={{ marginRight: 10 }}
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
                        className="glyphicon glyphicon-pencil pull-right"
                        style={{ marginRight: 10 }}
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
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h3 className="modal-title" id="editcate">Edit Category</h3>
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
                            onSubmit={Utility.updateCategory.bind(this)}
                          >
                            <div className="modal-body">
                              <p>Please edit values in fields below and save changes!</p>
                              <input
                                type="hidden"
                                className="form-control"
                                name="catid"
                                defaultValue={category.id}
                              />
                              <label htmlFor="name">Name:</label>
                              <input
                                type="text"
                                className="form-control"
                                name="catname"
                                defaultValue={category.name}
                              />
                              <label htmlFor="description">Description:</label>
                              <textarea
                                className="form-control"
                                row="5"
                                name="catdesc"
                                defaultValue={category.description}
                              >
                              </textarea>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="submit"
                                className="btn btn-primary"
                              >
                                <span className="glyphicon glyphicon-floppy-save">
                                  Update
                                </span>
                              </button>
                              <button type="submit" className="btn btn-danger" data-dismiss="modal">
                                <span className="glyphicon glyphicon-remove">    Close     </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>)}
                <nav aria-label="Page navigation">
                  <h4>Total Category:
                    <span className="badge">{ this.state.items ? this.state.items : 0}</span>
                  </h4>
                  <ul className="pagination">
                    <li
                      className={this.state.currentPage === 1 ? 'disabled' : ''}
                    >
                      <a
                        onSelect={Utility.getCategory(this.state.currentPage - 1)}
                        href={this.state.previousPage ? '/dashboard/categoryreport' : '#'}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    {pageListElements}
                    <li
                      className={this.state.currentPage === this.state.pages ? 'disabled bg.seconday' : ''}
                    >
                      <a
                        onSelect={Utility.getCategory(
                        (this.state.currentPage + 1) > this.state.pages
                        ? this.state.pages : this.state.currentPage + 1)}
                        href={this.state.nextPage ? '/dashboard/categoryreport' : '#'}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </ul>
            </div>
          </div> : <p className="text-center">{message}</p>}
      </div>
    );
  }
}
