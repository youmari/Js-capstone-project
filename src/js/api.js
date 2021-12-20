const url1 = 'https://api.tvmaze.com/shows';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YtXRS6uhi4iAGPXZph1T/likes';

const fetchData = (url) => {
  const response = fetch(url)
    .then((res) => res.json());
  return response;
};

const getData = () => fetchData(url1);

export const getLikes = () => fetchData(url2);

export default getData;