/**
 * Module for user business logic functions
 */
import { notify } from 'react-notify-toast';
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
      .then(function (response) {
        localStorage.setItem('message', response.data.message);
        window.location.assign('/login');
        notify.show(response.data.message, 'success', 4000);
      })
      .catch(function (error) {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  } else {
    notify.show('Please fill in all fields!', 'error', 4000);
  }
  event.target.elements.fname.value = '';
  event.target.elements.email.value = '';
  event.target.elements.username.value = '';
  event.target.elements.password.value = '';
}

export function getUser() {
  const config = { headers: { 'x-access-token': localStorage.getItem('token') } };
  axiosInstance.get('user/view', config)
    .then(function (response) {
      localStorage.setItem('profile', JSON.stringify(response.data.User));
    })
    .catch(function (error) {
      if (error.response) {
        notify.show(error.response.data.message, 'error', 4000);
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
        localStorage.isAuthenticated = true;
        localStorage.setItem('user', username);
        localStorage.setItem('message', '');
        window.location.assign('/welcome');
      })
      .catch(function (error) {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  } else {
    notify.show('Please fill in all fields!', 'error', 4000);
  }
  event.target.elements.username.value = '';
  event.target.elements.password.value = '';
}

export function logoutUser() {
  axiosInstance.post('user/logout')
    .then(function (response) {
      window.localStorage.clear();
      localStorage.setItem('message', response.data.message);
      window.location.assign('/login');
      notify.show(response.data.message, 'success', 4000);
    })
    .catch(function (error) {
      if (error.response) {
        notify.show(error.response.data.message, 'error', 4000);
      }
    });
}

export function deleteUser() {
  axiosInstance.delete('user/delete')
    .then(function (response) {
      localStorage.clear();
      notify.show(response.data.message, 'success', 4000);
    })
    .catch(function (error) {
      if (error.response) {
        localStorage.clear();
        notify.show(error.response.data.message, 'error', 4000);
      }
    });
}
