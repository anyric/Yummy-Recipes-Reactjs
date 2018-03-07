import axios from 'axios';

const url = 'http://127.0.0.1:5000/recipe/api/v1.0/';
axios.defaults.headers = { 'Content-Type': 'application/json' };


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
