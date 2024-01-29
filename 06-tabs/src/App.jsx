import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [userData,setUserData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [currentItem,setCurrentItem] = useState(0)

  useEffect(()=>{
    const data = fetchData()
    setUserData(data)
  },[])

  const fetchData = async () =>{
    try{   
      const results = await fetch(url)
      const data = await results.json()
      setUserData(data)
      setIsLoading(false)
    }catch(e){
      console.log(e)
    }
  }

  if(isLoading){
    return (
      <section className="jobs-center">
        <div className="loading"/>
      </section>
    )
  }

  return(
    <section className='jobs-center'>
    {/*button container*/}
      <BtnContainer jobInfo={userData} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    {/*job info*/}
      <JobInfo jobInfo={userData} currentItem={currentItem}/>
    </section>
  )
};
export default App;
