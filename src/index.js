import clearAllElement from './clearAllElement';
import './css/style.css';
import getData, { addLikes, getLikes } from './js/api';
import createCardItem from './js/createCardItem';


document.addEventListener('click', async (e) => {
  if (e.target.matches('.heart')) {
    e.target.classList.toggle('is-active');
    const item_id = Number(e.target.id)
     addLikes(item_id);
    //  clearAllElement();
    //  renderItems();
  }
})



const renderItems = async () => {
  let index = 0;
  const itemsData = await getData();
  const likesData = await getLikes();
  console.log(likesData)
  let data = likesData.sort((a,b) =>  a - b)
  console.log(data)
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