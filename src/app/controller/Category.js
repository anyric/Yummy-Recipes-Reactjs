/**
 * Module for category business logic functions
 */
import { notify } from 'react-notify-toast';
import { axiosInstance } from '../controller/AxiosInstance';

export function addCategory(event) {
  event.preventDefault();
  const categoryName = event.target.elements.categoryName.value;
  const description = event.target.elements.description.value;
  const data = { name: categoryName, description: description };

  if (categoryName !== '' && description !== '') {
    axiosInstance.post('category', data)
      .then(function (response) {
        notify.show(response.data.message, 'success', 4000);
        this.getCategory(null);
      })
      .catch(function (error) {
        if (error.response) {
          notify.show(error.response.data.message, 'error', 4000);
        }
      });
  } else {
    notify.show('Please fill in all fields!', 'error', 4000);
  }
  event.target.elements.categoryName.value = '';
  event.target.elements.description.value = '';
}

export function updateCategory(event) {
  event.preventDefault();
  const categoryId = event.target.elements.categoryId.value;
  const categoryName = event.target.elements.categoryName.value;
  const description = event.target.elements.description.value;
  const data = { name: categoryName, description: description };

  if (categoryName !== '' && description !== '') {
    axiosInstance.put(`category/${categoryId}`, data)
      .then(function (response) {
        notify.show(response.data.message, 'success', 4000);
      })
      .catch(function (error) {
        notify.show(error.response.data.message, 'error', 4000);
      });
  } else {
    notify.show('Please fill in all fileds!', 'error', 4000);
  }
}

export function deleteCategory(id) {
  axiosInstance.delete(`category/${id}`)
    .then(function (response) {
      notify.show(response.data.message, 'success', 4000);
    })
    .catch(function (error) {
      if (error.response) {
        notify.show(error.response.data.message, 'error', 4000);
      }
    });
}
