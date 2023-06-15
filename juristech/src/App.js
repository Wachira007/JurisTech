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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PageOne />} />
          <Route exact path="/reviews" element={<PageThree />} />
          <Route exact path="/about" element={<PageTwo />} />

          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
