const TvShowLink = document.querySelector('.tv-show-link');
const itemsCounter = (data) => data.length

const displayTvShownumbers = (data) => {
    const counter = itemsCounter(data);
    TvShowLink.textContent = `TvShows(${counter})`
}

export default displayTvShownumbers;