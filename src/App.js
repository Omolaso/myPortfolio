import Archive from "./components/Archive";
import LandingPage from "./components/LandingPage";
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/archive" element={<Archive/>}/>
        </Routes>
 
    </div>
  );
}

export default App;
