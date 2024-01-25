import { useState } from 'react';
import data from './data'
import Title from './components/Title';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems,setMenuItems] = useState(data)
  const [categories,setCategories] = useState(allCategories)
  const filterItems = (category) => {
    const newItems = data.filter((item) => item.category === category || category==='all')
    setMenuItems(newItems);
  }
  return (
    <main>
      <Title text='our menu'/>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menuItems={menuItems}/>
    </main>
  );
};
export default App;
