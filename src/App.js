import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Route>
      </Routes>

      
      
      
      
    </div>
  );
}

export default App;
