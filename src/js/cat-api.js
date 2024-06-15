import axios from 'axios';

axios.defaults.headers['x-api-key'] =
  'live_zVZLegicNQX58NrRr2a3UtQNLaAsu3u4YQWqDV3kak42qEhEeaTlUPvgEQMUxgbd';

async function fetchBreeds() {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');
  return data;
}

async function fetchBreed(breed) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`
  );
  return data;
}

export { fetchBreeds, fetchBreed };
