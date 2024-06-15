import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchBreeds, fetchBreed } from './js/cat-api';

const selectBreedRef = document.querySelector('#breeds');
const breedContainerRef = document.querySelector('.card');
const loaderRef = document.querySelector('.loader');

const options = [];
const data = fetchBreeds();

data
  .then(result => {
    result.forEach(breed => {
      const breedOption = document.createElement('option');
      breedOption.value = breed.id;
      breedOption.textContent = breed.name;
      options.push(breedOption);
    });

    selectBreedRef.append(...options);

    loaderRef.classList.add('hidden');
    selectBreedRef.classList.remove('hidden');
  })
  .catch(e => {
    iziToast.error({
      title: 'Error',
      message: 'Bad operation',
    });
    breedContainerRef.innerHTML = `<h1 class="error-title">Sorry, but server dosent work, reload page</h1>`;
    breedContainerRef.classList.remove('hidden');
    loaderRef.classList.add('hidden');
  });

selectBreedRef.addEventListener('change', e => {
  breedContainerRef.innerHTML = `<div class="image-container">
  <span class="loader"></span>
  </div>
  `;
  breedContainerRef.classList.remove('hidden');
  const breedDetails = fetchBreed(e.target.value);

  breedDetails
    .then(result => {
      if (result == []) {
        throw error;
      }
      breedContainerRef.innerHTML = `<div class="image-container">
            <img src="${result[0].url}" alt="picture of ${result[0].breeds[0].name}">
        </div>
        <h2 class="title">${result[0].breeds[0].name}</h2>
        <p class="description">${result[0].breeds[0].description}</p>`;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
      });
      breedContainerRef.innerHTML = `<h1 class="error-title">Sorry, but server dosent work, reload page</h1>`;
      breedContainerRef.classList.remove('hidden');
      loaderRef.classList.add('hidden');
    });
});
