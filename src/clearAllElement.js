const cardContainer = document.querySelector('.grid-cards-container');
const clearAllElement = () => {
  while (cardContainer.firstChild) {
    cardContainer.firstChild.remove()
  }
}

export default clearAllElement;