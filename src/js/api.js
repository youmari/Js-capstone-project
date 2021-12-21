const url = 'https://api.tvmaze.com/shows';

const getData = () => {
  const response = fetch(url)
    .then((res) => res.json());
  return response;
};

export default getData;