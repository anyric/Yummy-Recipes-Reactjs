import { axiosInstance } from '../controller/AxiosInstance';

export function registerUser(event) {
  event.preventDefault();
  const fname = event.target.elements.fname.value;
  const email = event.target.elements.email.value;
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  const data = { name: fname, email: email, username: username, password: password };
  if (fname !== '' && email !== '' && username !== '' && password !== '') {
    axiosInstance.post('user/register', data)
      .then(function (res) {
        alert(res.data.message);
        window.location.assign('/login');
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
  axiosInstance.get('user/view', config)
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
    axiosInstance.post('user/login', data)
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        localStorage.isauth = true;
        localStorage.setItem('user', username);
        window.location.assign('/dashboard/welcome');
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
  axiosInstance.post('user/logout')
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
      window.location.assign('/login');
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    });
}
export function deleteUser() {
  axiosInstance.delete('user/delete')
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
