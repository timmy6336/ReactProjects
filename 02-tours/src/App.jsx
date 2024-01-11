import { useState } from "react";
import Loading from './components/Loading'
import Tours from "./components/Tours";
import { useEffect } from "react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [tours,setTours] = useState([])

  useEffect(()=>{
    fetchTours()
  },[])

  const fetchTours = async () =>{
    try{
      const resp = await fetch(url)
      const tourData = await resp.json()
      setTours(tourData)
      setIsLoading(false)
    } catch (e) {

    }
  }

  const removeTour = (id) => {
    
    let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if(isLoading){
    return (
      <main>
        <Loading/>
      </main>)
  }
  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button type="button" style={{margin:'2rem'}}
        className="btn" onClick={()=>fetchTours()}>refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>)
};
export default App;
