import clearAllElement from './clearAllElement';
import './css/style.css';
import getData, { addLikes, getLikes } from './js/api';
import createCardItem from './js/createCardItem';


document.addEventListener('click', async (e) => {
  if (e.target.matches('.heart')) {
    e.target.classList.toggle('is-active');
    const item_id = Number(e.target.id)
     await addLikes(item_id);
     clearAllElement();
     await renderItems();
  }
})



const renderItems = async () => {
  let index = 0;
  const itemsData = await getData();
  const likesData = await getLikes();
  likesData.sort((a,b) =>  a.item_id - b.item_id)
  console.log(likesData)
  for (let i = 0; i < itemsData.length; i++) {
    if (likesData[index] !== undefined && itemsData[i].id == likesData[index].item_id) {
      createCardItem(itemsData[i],likesData[index])  
      index++;
    }else {
      createCardItem(itemsData[i])
    }
  }
}    
    


renderItems();