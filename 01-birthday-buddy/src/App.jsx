import { useState } from 'react';
import data from './data'
import List from './List';

const App = () => {
  const [personData,setPersonData] = useState(data)

  const clearList = () => {
    setPersonData([])
  }

  return (<main>
    <section className='container'>
      <h3>{personData.length} birthdays today</h3>
      <List people={personData}/>
      <button type='button' className='btn btn-block' onClick={clearList}>Clear List</button>
    </section>
  </main>);
};
export default App;
