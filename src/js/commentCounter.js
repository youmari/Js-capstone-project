const commentsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8v2YvLQLsPQiil6nHJBM/comments';
const fetchMovieComments = async (movieId) => {
  const response = await fetch(`${commentsEndpoint}?item_id=${movieId}`).catch(() => 0);
  return response.json();
};

// async function to fetch total number of available comments for a movie wih a specific ID
const getTotalComments = async (movieId) => {
  const res = await fetchMovieComments(movieId)
    .then((data) => (!data.error ? data.length : 0))
    .catch(() => 0);
  return res;
};
const popup = document.querySelector('.movie-popup');

// Update UI total number of comments
const updateTotalCommentsCount = (movieId) => {
  getTotalComments(movieId).then((total) => {
    popup.querySelector('.total-comments').innerHTML = total;
  });
};
export default updateTotalCommentsCount;
export { fetchMovieComments, getTotalComments };
