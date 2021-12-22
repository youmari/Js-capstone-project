const url1 = 'https://api.tvmaze.com/shows';
const fetchMovieData = async (movieId) => {
  const response = await fetch(`${url1}/${movieId}`)
    .then((res) => res.json())
    .then((data) => data)
    .then((error) => error);
  return response;
};
const enableClosePopup = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    const popup = document.querySelector('.movie-popup');
    popup.style.display = 'none';
    popup.innerHTML = '';
  });
};
const displayMoviePopup = (movieId) => {
  const popup = document.querySelector('.movie-popup');
  popup.innerHTML = `Fetching data...<br>
  <span id="close-popup">X</span>`;
  fetchMovieData(movieId).then((data) => {
    popup.innerHTML = `
    <span id="close-popup">X</span>
    <img src="${data.image.medium}" class="popup-img">
    <h3 class="popup-title">${data.name}</h3>
    <table>
      <tr>
        <td>
          <b>premiered:</b> ${data.premiered}
        </td>
        <td>
          <b>Ended:</b> ${data.ended}
        </td>
      </tr>
      <tr>
        <td>
          <b>Language:</b> ${data.language}
        </td>
        <td>
          <b>Type:</b> ${data.type}
        </td>
      </tr>
    </table>
    `;
    enableClosePopup();
  });
  popup.style.display = 'block';
  enableClosePopup();
};
const enableComments = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.getAttribute('movie_id');
      displayMoviePopup(movieId);
    });
  });
};

export default enableComments;