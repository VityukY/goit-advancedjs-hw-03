import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.headers['x-api-key'] =
  'live_zVZLegicNQX58NrRr2a3UtQNLaAsu3u4YQWqDV3kak42qEhEeaTlUPvgEQMUxgbd';
const selectBreedRef = document.querySelector('#breeds');
const breedContainerRef = document.querySelector('.card');
const loaderRef = document.querySelector('.loader');

async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const result = response.data;
    return result;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Bad operation',
    });
    breedContainerRef.innerHTML = `<h1 class="error-title">Sorry, but server dosent work, reload page</h1>`;
    breedContainerRef.classList.remove('hidden');
    loaderRef.classList.add('hidden');
  }
}

async function fetchBreed(breed) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`
    );
    const result = response.data;
    return result;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Illegal operation',
    });
    breedContainerRef.innerHTML = `<h1 class="error-title">Sorry, but server dosent work, reload page</h1>`;
    breedContainerRef.classList.remove('hidden');
    loaderRef.classList.add('hidden');
  }
}

const options = [];
const data = fetchBreeds();
data.then(result => {
  result.forEach(breed => {
    const breedOption = document.createElement('option');
    breedOption.value = breed.id;
    breedOption.textContent = breed.name;
    options.push(breedOption);
  });
  selectBreedRef.append(...options);

  loaderRef.classList.add('hidden');
  selectBreedRef.classList.remove('hidden');
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
