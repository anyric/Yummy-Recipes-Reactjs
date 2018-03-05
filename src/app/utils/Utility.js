import axios from 'axios';

const url = 'http://127.0.0.1:5000/recipe/api/v1.0/';
axios.defaults.headers = { 'Content-Type': 'application/json' };

// user logic functions
export function registerUser(event) {
  event.preventDefault();
  const fname = event.target.elements.fname.value;
  const email = event.target.elements.email.value;
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  const data = { name: fname, email: email, username: username, password: password };
  if (fname !== '' && email !== '' && username !== '' && password !== '') {
    axios.post(`${url}user/register`, data)
      .then(function (res) {
        alert(res.data.message);
        window.location.href = '/login';
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  } else {
    alert('Please fill in all fields!');
  }
  event.target.elements.fname.value = '';
  event.target.elements.email.value = '';
  event.target.elements.username.value = '';
  event.target.elements.password.value = '';
}
export function getUser() {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axios.get(`${url}user/view`, config)
    .then(function (res) {
      localStorage.setItem('profile', JSON.stringify(res.data.User));
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    });
}
export function loginUser(event) {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  const data = { username: username, password: password };
  if (username !== '' && password !== '') {
    axios.post(`${url}user/login`, data)
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        localStorage.isauth = true;
        localStorage.setItem('user', username);
        window.location.href = '/dashboard/welcome';
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  } else {
    alert('Please fill in all fields!');
  }
  event.target.elements.username.value = '';
  event.target.elements.password.value = '';
}
export function logoutUser() {
  axios.defaults.headers = { 'x-access-token': localStorage.getItem('token') };
  axios.post(`${url}user/logout`)
    .then(function (res) {
      alert(res.data.message);
      window.localStorage.removeItem('allcategory');
      window.localStorage.removeItem('category');
      window.localStorage.removeItem('pagination');
      window.localStorage.removeItem('recipes');
      window.localStorage.removeItem('paginate');
      window.localStorage.removeItem('catmessage');
      window.localStorage.removeItem('recipemessage');
      window.localStorage.clear();
      window.location.href = '/login';
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    });
}
export function deleteUser() {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axios.delete(`${url}user/delete`, config)
    .then(function () {
      localStorage.clear();
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
        localStorage.clear();
      }
    });
}
// category logic functions
export function addCategory(event) {
  event.preventDefault();
  const catname = event.target.elements.catname.value;
  const catdesc = event.target.elements.catdesc.value;
  const data = { name: catname, description: catdesc };
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  if (catname !== '' && catdesc !== '') {
    axios.post(`${url}category`, data, config)
      .then(function (res) {
        alert(res.data.message);
        this.getCategory();
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  } else {
    alert('Please fill in all fields!');
  }
  event.target.elements.catname.value = '';
  event.target.elements.catdesc.value = '';
}
export function updateCategory(event) {
  event.preventDefault();
  const catid = event.target.elements.catid.value;
  const catname = event.target.elements.catname.value;
  const catdesc = event.target.elements.catdesc.value;
  const data = { name: catname, description: catdesc };
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axios.put(`${url}category/${catid}`, data, config)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
}
export function getCategory(page) {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  let pageURL = '';
  if (page === null) {
    pageURL = `${url}category/`;
  } else if (typeof page === 'number' && page > 0) {
    localStorage.removeItem('category');
    pageURL = `${url}category/?page=${page}`;
  } else {
    pageURL = page;
  }
  axios.get(pageURL, config)
    .then(function (res) {
      localStorage.setItem('pagination', JSON.stringify(res.data.category));
      localStorage.setItem('category', JSON.stringify(res.data.category.results));
      localStorage.setItem('allcategory', JSON.stringify(res.data.category.results));
    })
    .catch(function (error) {
      if (error.response) {
        const pagination = { items: 0, page: 0, pages: 0, next: null, previous: null };
        localStorage.setItem('pagination', JSON.stringify(pagination));
        localStorage.setItem('catmessage', JSON.stringify(error.response.data.message));
      }
    });
}
export function searchCategory(term) {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axios.get(`${url}category/?q=${term}`, config)
    .then(function (res) {
      localStorage.setItem('category', JSON.stringify(res.data.category.results));
    })
    .catch(function (error) {
      if (error.response) {
        localStorage.setItem('catmessage', JSON.stringify(error.response.data.message));
      }
    });
}
export function deleteCategory(id) {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axios.delete(`${url}category/${id}`, config)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    });
}
// recipe logic functions
export function addRecipe(event) {
  event.preventDefault();
  const catid = parseInt(event.target.elements.catid.value, 10);
  const recname = event.target.elements.recname.value;
  const recdesc = event.target.elements.recdesc.value;
  const data = { name: recname, category_id: catid, ingredients: recdesc };
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  if (catid !== '' && recname !== '' && recdesc !== '') {
    axios.post(`${url}category/recipes`, data, config)
      .then(function (res) {
        alert(res.data.message);
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  } else {
    alert('Please fill in all fields!');
  }
  event.target.elements.recname.value = '';
  event.target.elements.recdesc.value = '';
}
export function updateRecipe(event) {
  event.preventDefault();
  const recid = event.target.elements.recid.value;
  const reciname = event.target.elements.reciname.value;
  const recing = event.target.elements.recing.value;
  const data = { name: reciname, ingredients: recing };
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axios.put(`${url}category/recipes/${recid}`, data, config)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
}
export function getRecipe(page) {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  let pageURL = '';
  if (typeof page === 'number' && page > 0) {
    pageURL = `${url}category/recipes/?page=${page}`;
  } else {
    pageURL = `${url}category/recipes/`;
  }
  axios.get(pageURL, config)
    .then(function (res) {
      localStorage.setItem('paginate', JSON.stringify(res.data.recipe));
      localStorage.setItem('recipes', JSON.stringify(res.data.recipe.results));
    })
    .catch(function (error) {
      if (error.response) {
        const paginate = { items: 0, page: 0, pages: 0, next: null, previous: null };
        localStorage.setItem('paginate', JSON.stringify(paginate));
        localStorage.setItem('recipemessage', JSON.stringify(error.response.data.message));
      }
    });
}
export function deleteRecipe(id) {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axios.delete(`${url}category/recipes/${id}`, config)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    });
}
