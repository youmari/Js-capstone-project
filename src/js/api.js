const url1 = 'https://api.tvmaze.com/shows';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8v2YvLQLsPQiil6nHJBM/likes';

const fetchData = (url, CostumSettings = {}) => {
  const response = fetch(url, CostumSettings)
    .then((res) =>  res.json());
  return response;
};

const getData = () => fetchData(url1);

export const getLikes = () => fetchData(url2);

export const addLikes = async (item_id) => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({item_id}),
  };
  const res = await fetchData(url2,settings)
    .catch(err => err);
    console.log(res);
  return res
}

export default getData;