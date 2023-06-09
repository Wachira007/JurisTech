import "./App.css";
// import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
// import Lawyers from "./Components/LYT/Lawyers";
import Practice from "./Components/Practice_area/Practice";
// import Contact from "./Components/ContactUs/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PageOne from "./Pages/PageOne";
import Footer from "./Components/Footer/Footer";
import PageThree from "./Pages/PageThree";
import PageTwo from "./Pages/PageTwo";
import PageFour from "./Pages/PageFour";
import PageFive from "./Pages/PageFive";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PageOne />} />
          <Route exact path="/reviews" element={<PageThree />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about" element={<PageTwo />} />
          <Route exact path="/contact_us" element={<PageFour />} />
          <Route exact path="/practice" element={<PageFive />} />

          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
