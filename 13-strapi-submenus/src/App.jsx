import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

const App = () => {
  return(
    <main>
      <Navbar/>
      <Hero />
      <Sidebar/>
      <Submenu />
    </main>
  )
};
export default App;
