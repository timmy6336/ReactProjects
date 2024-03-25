import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ConvexHull, Home, AStar } from './pages'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/ConvexHull" element={<ConvexHull/>}/>
        <Route path="/AStar" element={<AStar/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
