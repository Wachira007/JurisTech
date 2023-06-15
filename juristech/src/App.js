import "./App.css";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Lawyers from "./Components/LYT/Lawyers";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Practice from "./Components/Practice_area/Practice";
import Contact from "./Components/ContactUs/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/lawyer" element={<Lawyers />} />
          <Route exact path="/practice" element={<Practice />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
