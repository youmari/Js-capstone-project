import './css/style.css';
import { getData } from './js/api';
import { createCardItem } from './js/createCardItem';


const renderItems = async () => {
  const data = await getData()
  data.forEach((item,index) => createCardItem(item))
}

renderItems()