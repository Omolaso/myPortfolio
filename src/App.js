import Archive from "./components/Archive";
import SharedLayout from "./components/SharedLayout";
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
        <ScrollToTop/>
      <Routes>
          <Route path="/" element={<SharedLayout/>}/>
          <Route path="/archive" element={<Archive/>}/>
      </Routes>
 
    </div>
  );
}

export default App;
