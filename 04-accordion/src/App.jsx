import { useState } from "react";
import data from "./data";
import SingleQuestion from "./components/SingleQuestion";
import Questions from "./components/Questions";

const App = () => {
  const [questions,setQuestions] = useState(data)
  console.log(questions)
  return (<main>
    <Questions questions={questions}/>
  </main>);
};
export default App;
