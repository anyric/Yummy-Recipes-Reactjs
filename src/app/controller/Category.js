import axios from 'axios';

const url = 'http://127.0.0.1:5000/recipe/api/v1.0/';
axios.defaults.headers = { 'Content-Type': 'application/json' };

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
        this.getCategory(null);
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
export function getCategory() {
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
