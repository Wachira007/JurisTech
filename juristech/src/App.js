import './App.css';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About'
import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
          <div className="App">
        
  
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        
      </div>
      </BrowserRouter>
  );

}

export default App;
