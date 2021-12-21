const cardContainer = document.querySelector('.grid-cards-container');

const createCardItem = (item) => {
  const cardElement = document.createElement('article');
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h4');
  const commentAndLikeDiv = document.createElement('div');
  const commentBtn = document.createElement('button');

  cardContainer.append(cardElement);
  cardElement.append(cardImage, cardTitle, commentAndLikeDiv);
  cardElement.classList.add('item');
  cardTitle.classList.add('card-title');
  commentAndLikeDiv.append(commentBtn);
  commentAndLikeDiv.classList.add('comment-and-like');
  commentBtn.classList.add('comment-btn');
  commentBtn.textContent = 'Comment';

  cardImage.src = item.image.medium;
  cardTitle.textContent = item.name;
};

export default createCardItem;