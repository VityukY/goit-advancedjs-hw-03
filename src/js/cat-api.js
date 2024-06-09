import axios from 'axios';
axios.defaults.headers['x-api-key'] =
  'live_zVZLegicNQX58NrRr2a3UtQNLaAsu3u4YQWqDV3kak42qEhEeaTlUPvgEQMUxgbd';
const selectBreedRef = document.querySelector('#breeds');
const breedContainerRef = document.querySelector('.breedContainer');
// https://api.thecatapi.com/v1/images/search?breed_ids=beng
// https://api.thecatapi.com/v1/breeds
/*


const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key':
    'live_zVZLegicNQX58NrRr2a3UtQNLaAsu3u4YQWqDV3kak42qEhEeaTlUPvgEQMUxgbd',
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
};

fetch(
  'https://api.thecatapi.com/v1/images/search?breed_ids=beng',
  requestOptions
)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

let result;

// Function to make the Axios request
async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const result = response.data;
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
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
    console.error('Error fetching data:', error);
  }
}
// Call the function to fetch data
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
});

selectBreedRef.addEventListener('change', e => {
  const breedDetails = fetchBreed(e.target.value);
  breedDetails.then(result => {
    console.log(result);
    let breedContainer = document.createElement('div');
    let breedTitle = document.createElement('h1');
    breedTitle.textContent = result[0].breeds[0].name;
    let breedImg = document.createElement('img');
    breedImg.style.width = '800px';

    breedImg.src = result[0].url;
    breedImg.alt = `picture of ${result[0].breeds[0].name}`;
    let breedDescription = document.createElement('p');
    breedDescription.textContent = result[0].breeds[0].description;
    breedContainer.append(breedImg, breedTitle, breedDescription);
    breedContainerRef.replaceChildren(breedContainer);
  });
});
