import { axiosInstance } from '../controller/AxiosInstance';

// category logic functions
export function addCategory(event) {
  event.preventDefault();
  const categoryName = event.target.elements.categoryName.value;
  const description = event.target.elements.description.value;
  const data = { name: categoryName, description: description };

  if (categoryName !== '' && description !== '') {
    axiosInstance.post('category', data)
      .then(function (response) {
        alert(response.data.message);
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
  event.target.elements.categoryName.value = '';
  event.target.elements.description.value = '';
}

export function updateCategory(event) {
  event.preventDefault();
  const categoryId = event.target.elements.categoryId.value;
  const categoryName = event.target.elements.categoryName.value;
  const description = event.target.elements.description.value;
  const data = { name: categoryName, description: description };
  console.log(data);
  axiosInstance.put(`category/${categoryId}`, data)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
}

export function deleteCategory(id) {
  axiosInstance.delete(`category/${id}`)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    });
}
