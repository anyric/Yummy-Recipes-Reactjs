import { axiosInstance } from '../controller/AxiosInstance';

// recipe logic functions
export function addRecipe(event) {
  event.preventDefault();
  const categoryId = parseInt(event.target.elements.categoryId.value, 10);
  const recipeName = event.target.elements.recipeName.value;
  const ingredients = event.target.elements.ingredients.value;
  const data = { name: recipeName, category_id: categoryId, ingredients: ingredients };

  if (categoryId !== '' && recipeName !== '' && recipeName && ingredients !== '') {
    axiosInstance.post('category/recipes', data)
      .then(function (response) {
        alert(response.data.message);
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  } else {
    alert('Please fill in all fields!');
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

  axiosInstance.put(`category/recipes/${recipeId}`, data)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
}

export function deleteRecipe(id) {
  axiosInstance.delete(`category/recipes/${id}`)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    });
}
