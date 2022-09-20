import Archive from "./components/Archive";
import SharedLayout from "./components/SharedLayout";
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<SharedLayout/>}/>
          <Route path="/archive" element={<Archive/>}/>
      </Routes>

      
      
      {/* <Archive/> */}
      
      
    </div>
  );
}

export default App;
