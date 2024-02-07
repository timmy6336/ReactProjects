import { useEffect, useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import {nanoid} from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const localStorageItems = JSON.parse(localStorage.getItem("Grocery_Bud_List"))
  const itemsList = localStorageItems?localStorageItems:[]

  const [items,setItems] = useState(itemsList)

  useEffect(() =>{
    localStorage.setItem("Grocery_Bud_List",JSON.stringify(items))
  },[items])

  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed:false,
      id:nanoid()
    }
    setItems([...items,newItem])
    toast.success("new item added")
  }

  const removeItem = (itemId) => {
    const newList = items.filter((item) => {
      return item.id !== itemId
    })

    setItems(newList)
    toast.success("item removed")
  }

  const toggleCompletedState = (itemId) => {
      const newItems = items.map((item) => {
        if (item.id === itemId){
          const newItem = {...item,completed: !item.completed}
          return newItem
        }
        return item
      })
      setItems(newItems)
  }

  return (
    <section className="section-center">
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} toggleCompletedState={toggleCompletedState}/>
      <ToastContainer position='top-center' />
    </section>
  )
};

export default App;
