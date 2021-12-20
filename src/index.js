import './css/style.css';
import getData, { getLikes } from './js/api';
import createCardItem from './js/createCardItem';

const renderItems = async () => {
  const itemsData = await getData();
  const likesData = await getLikes();
  itemsData.forEach((item, index) => createCardItem(item, likesData[index]));
};

renderItems();