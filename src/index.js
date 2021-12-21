/* eslint-disable */
import './css/style.css';
import getData, { addLikes, getLikes } from './js/api';
import createCardItem from './js/createCardItem';
import displayTvShownumbers from './js/itemsCounter';

document.addEventListener('click', async (e) => {
  if (e.target.matches('.heart')) {
    e.target.classList.toggle('is-active');
    const item_id = Number(e.target.id)
    let like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));
    e.target.nextSibling.textContent = `${like + 1} likes`;
    await addLikes(item_id);
  }
})

const renderItems = async () => {
  let index = 0;
  const itemsData = await getData();
  const likesData = await getLikes();
  displayTvShownumbers(itemsData);
  likesData.sort((a,b) =>  a.item_id - b.item_id)
  for (let i = 0; i < itemsData.length; i++) {
    if (likesData[index] !== undefined && itemsData[i].id == likesData[index].item_id) {
      createCardItem(itemsData[i],likesData[index])  
      index++;
    }else {
      createCardItem(itemsData[i]);
    }
  }
}    

renderItems();