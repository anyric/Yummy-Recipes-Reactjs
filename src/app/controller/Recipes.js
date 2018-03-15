/**
 * Module for recipe business logic functions
 */
import { notify } from 'react-notify-toast';
import { axiosInstance } from '../controller/AxiosInstance';

export function addRecipe(event) {
  event.preventDefault();
  const categoryId = parseInt(event.target.elements.categoryId.value, 10);
  const recipeName = event.target.elements.recipeName.value;
  const ingredients = event.target.elements.ingredients.value;
  const data = { name: recipeName, category_id: categoryId, ingredients: ingredients };

  if (categoryId !== '' && recipeName !== '' && recipeName && ingredients !== '') {
    axiosInstance.post('category/recipes', data)
      .then(function (response) {
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
  event.target.elements.recipeName.value = '';
  event.target.elements.ingredients.value = '';
}

export function updateRecipe(event) {
  event.preventDefault();
  const recipeId = event.target.elements.recipeId.value;
  const recipeName = event.target.elements.recipeName.value;
  const ingredients = event.target.elements.ingredients.value;
  const data = { name: recipeName, ingredients: ingredients };
  if (recipeName !== '' && ingredients !== '') {
    axiosInstance.put(`category/recipes/${recipeId}`, data)
      .then(function (response) {
        notify.show(response.data.message, 'success', 4000);
      })
      .catch(function (error) {
        notify.show(error.response.data.message, 'error', 4000);
      });
  } else {
    notify.show('Please fill in all fields!', 'error', 4000);
  }
}

export function deleteRecipe(id) {
  axiosInstance.delete(`category/recipes/${id}`)
    .then(function (response) {
      notify.show(response.data.message, 'success', 4000);
    })
    .catch(function (error) {
      if (error.response) {
        notify.show(error.response.data.message, 'error', 4000);
      }
    });
}
