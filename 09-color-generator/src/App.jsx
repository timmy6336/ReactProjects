import Form from './components/Form'
import ColorList from './components/ColorList'
import { useState } from 'react';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [values,setValues] = useState(new Values('#f15025').all(10))
  return (
  <section>
    <Form setValues={setValues}/>
    <ColorList values={values}/>
    <ToastContainer position='top-center' />
  </section>)
};
export default App;
